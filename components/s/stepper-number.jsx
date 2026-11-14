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
		"content": `<style>.a8sigbbmn {
  d: path("M5.125 6.5h13.75A2.625 2.625 0 0 1 21.5 9.125v5.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 14.875v-5.75A2.625 2.625 0 0 1 5.125 6.5M8 6.5v11m8-11v11M4 12h2.5m11 0H20m-1.25-1.25v2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m8i79gbtl {
  d: path("m11 10l1.25-1v6");
}
</style><g class="hntgybcog"><path class="a8sigbbmn"/><path class="m8i79gbtl"/></g>`,
		"fallback": "uix:stepper-number",
	});
}

export default Component;
