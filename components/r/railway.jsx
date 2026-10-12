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
		"content": `<style>.qpzaa6ksu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.75L5 21.25m10.5-18.5l3.5 18.5M7 6.5h10M6 11.25h12m-13 5h14");
}
</style><path class="qpzaa6ksu"/>`,
		"fallback": "iconoven:railway",
	});
}

export default Component;
