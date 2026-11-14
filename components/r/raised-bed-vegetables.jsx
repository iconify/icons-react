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
		"content": `<style>.sy4b-ubyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 11.5h14.5A1.75 1.75 0 0 1 21 13.25v3A1.75 1.75 0 0 1 19.25 18H4.75A1.75 1.75 0 0 1 3 16.25v-3a1.75 1.75 0 0 1 1.75-1.75M5.5 18v3.5m13-3.5v3.5m-11-10v-3q0-3.5-3-4.5m3 4.5q0-3.5 3-4.5m6 7.5v-3q0-3.5-3-4.5m3 4.5q0-3.5 3-4.5");
}
</style><path class="sy4b-ubyj"/>`,
		"fallback": "uix:raised-bed-vegetables",
	});
}

export default Component;
