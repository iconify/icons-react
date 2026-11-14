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
		"content": `<style>.y0-lqcb1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3za5.5 5.5 0 0 1 5.5 5.5v7A5.5 5.5 0 0 1 9 21a5.5 5.5 0 0 1-5.5-5.5v-7A5.5 5.5 0 0 1 9 3m0 3.5v3M17.5 8L19 6.5L20.5 8m-3 5l1.5 1.5l1.5-1.5");
}
</style><path class="y0-lqcb1o"/>`,
		"fallback": "uix:mouse-scroll",
	});
}

export default Component;
