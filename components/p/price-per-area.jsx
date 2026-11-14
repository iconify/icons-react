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
		"content": `<style>.vtjbiybmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21L20 3m-3.75 11.5h3.5a1.75 1.75 0 0 1 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-3.5a1.75 1.75 0 0 1 1.75-1.75M9 4.75c-.25-.5-1-1-2-1c-1.25 0-2 .75-2 1.75c0 2.25 4 1.5 4 4c0 1-.75 1.75-2 1.75s-2-.5-2.25-1.25M7 2.5v1.25m0 7.5v1.25");
}
</style><path class="vtjbiybmy"/>`,
		"fallback": "uix:price-per-area",
	});
}

export default Component;
