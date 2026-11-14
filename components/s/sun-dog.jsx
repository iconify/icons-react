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
		"content": `<style>.w71qmpb-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6.5a8.5 8.5 0 0 1 13 0m0 11a8.5 8.5 0 0 1-13 0m3-5.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-5 0h.01m16.99 0h.01");
}
</style><path class="w71qmpb-d"/>`,
		"fallback": "uix:sun-dog",
	});
}

export default Component;
