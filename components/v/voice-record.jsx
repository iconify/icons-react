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

.nu66edblv {
  d: path("M4 10.5v.5a6 6 0 0 0 12 0v-.5M10 17v4.5m-3 0h6");
}

.p65z8acrr {
  fill: currentColor;
  d: path("M17 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.r4nz6hb4u {
  d: path("M10 2.5za3.25 3.25 0 0 1 3.25 3.25v4.5A3.25 3.25 0 0 1 10 13.5a3.25 3.25 0 0 1-3.25-3.25v-4.5A3.25 3.25 0 0 1 10 2.5");
}
</style><g class="hntgybcog"><path class="r4nz6hb4u"/><path class="nu66edblv"/><path class="p65z8acrr"/></g>`,
		"fallback": "uix:voice-record",
	});
}

export default Component;
