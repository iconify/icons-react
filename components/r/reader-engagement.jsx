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

.ikt57iivp {
  d: path("M6.5 16.5L10 12l2.5 2.5l3-3.5m3-2.5c-2.75-2-3.25-3.5-3.25-4.5c0-1.25 1-2 1.75-2s1.25.5 1.5 1.25C18.75 2.5 19.25 2 20 2s1.75.75 1.75 2c0 1-.5 2.5-3.25 4.5");
}

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}
</style><g class="hntgybcog"><path class="p8u760b4u"/><path class="ikt57iivp"/></g>`,
		"fallback": "uix:reader-engagement",
	});
}

export default Component;
