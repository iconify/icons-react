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

.i7r1u8eqd {
  d: path("m9.5 5.25l2-2.75H20A1.5 1.5 0 0 1 21.5 4v11a1.5 1.5 0 0 1-1.5 1.5m-12.75-2h.01");
}

.w08spbc2s {
  d: path("M8.851 7.5h6.024a2.625 2.625 0 0 1 2.625 2.625v8.75a2.625 2.625 0 0 1-2.625 2.625H8.851a2.63 2.63 0 0 1-2.136-1.099L3.59 16.026a2.625 2.625 0 0 1 0-3.052l3.125-4.375A2.63 2.63 0 0 1 8.851 7.5");
}
</style><g class="hntgybcog"><path class="w08spbc2s"/><path class="i7r1u8eqd"/></g>`,
		"fallback": "uix:price-tag-stack",
	});
}

export default Component;
