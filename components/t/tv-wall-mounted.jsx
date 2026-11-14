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
		"content": `<style>.su7hm8uxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4v16M9.625 5.5h9.25A2.625 2.625 0 0 1 21.5 8.125v7.75a2.625 2.625 0 0 1-2.625 2.625h-9.25A2.625 2.625 0 0 1 7 15.875v-7.75A2.625 2.625 0 0 1 9.625 5.5M2.5 12H7");
}
</style><path class="su7hm8uxf"/>`,
		"fallback": "uix:tv-wall-mounted",
	});
}

export default Component;
