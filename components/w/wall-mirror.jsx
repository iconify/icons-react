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
		"content": `<style>.xn4cfyfjl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12a7 9.5 0 1 0 14 0a7 9.5 0 1 0-14 0m3.5-1l4-4");
}
</style><path class="xn4cfyfjl"/>`,
		"fallback": "uix:wall-mirror",
	});
}

export default Component;
