import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ld1serdyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7.5h11m-9.25 0a3.75 3.75 0 0 1 7.5 0m-7 0V9a3.25 3.25 0 0 0 6.5 0V7.5M3 20.5C3 17 6.25 15 10.5 15c1.505 0 2.885.251 4.039.73M15 21l3-3m3.75-1.5a2.25 2.25 0 1 1-2.25-2.25");
}
</style><path class="ld1serdyo"/>`,
		"fallback": "uix:telecom-engineer",
	});
}

export default Component;
