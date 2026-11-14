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

.skesi11dg {
  d: path("M6.5 7.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m3.5-1h.01m3.99 0h.01");
}

.zn3m0m3nv {
  d: path("M9.75 9a2.25 2.25 0 0 0 4.5 0M3 18.5h6.25m5.5 0H21m-11.75 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}
</style><g class="hntgybcog"><path class="skesi11dg"/><path class="zn3m0m3nv"/></g>`,
		"fallback": "uix:mood-slider",
	});
}

export default Component;
