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
		"content": `<style>.d3zla7brl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5h19l-3 5h-13Zm3.5 0v-4a1 1 0 0 1 1-1h8l3 5M10 3za1.5 1.5 0 0 1 1.5 1.5V5A1.5 1.5 0 0 1 10 6.5A1.5 1.5 0 0 1 8.5 5v-.5A1.5 1.5 0 0 1 10 3M3.5 21q2.75-1.5 5.5 0t5.5 0t5.5 0");
}
</style><path class="d3zla7brl"/>`,
		"fallback": "uix:take-ferry",
	});
}

export default Component;
