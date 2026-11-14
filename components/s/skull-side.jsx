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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p-pf40bmn {
  d: path("M8 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 18h5.5l2-2.5");
}

.r06i-wtfd {
  d: path("M5 11.5c0-5.5 3.5-9 8.5-9s8 3.5 8 8c0 3.5-2 5.5-4.5 6l-1 4c0 .5-.5 1-1 1H8.5L7 18H5l-1.5-3.5Z");
}
</style><g class="hntgybcog"><path class="r06i-wtfd"/><path class="p-pf40bmn"/></g>`,
		"fallback": "uix:skull-side",
	});
}

export default Component;
