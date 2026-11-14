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
		"content": `<style>.c26zxgoma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 5.5l3.65-2.028a1.75 1.75 0 0 1 1.7 0L16.5 5.5a1.334 1.334 0 0 1-.648 2.5H8.148A1.334 1.334 0 0 1 7.5 5.5M3 20.5h18M5.5 10.75v7m4.25-7v7m4.5-7v7m4.25-7v7");
}
</style><path class="c26zxgoma"/>`,
		"fallback": "uix:law-firm",
	});
}

export default Component;
