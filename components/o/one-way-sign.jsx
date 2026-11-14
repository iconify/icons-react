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
		"content": `<style>.d3_0351ap {
  d: path("m14.5 9l3 3l-3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yaiaozoyi {
  d: path("M5.5 6h13A3.5 3.5 0 0 1 22 9.5v5a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 14.5v-5A3.5 3.5 0 0 1 5.5 6m0 6h12");
}
</style><g class="hntgybcog"><path class="yaiaozoyi"/><path class="d3_0351ap"/></g>`,
		"fallback": "uix:one-way-sign",
	});
}

export default Component;
