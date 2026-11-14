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

.l37r4-8ho {
  d: path("M10 9.75V8.5a2 2 0 0 1 4 0v1.25M2.5 16.5h19M5 16.5l2 3h10l2-3M7 14a5.5 5.5 0 0 1 2.25-2.5");
}

.pcqc5v7hp {
  d: path("M3.5 16.5c0-9 17-9 17 0");
}
</style><g class="hntgybcog"><path class="pcqc5v7hp"/><path class="l37r4-8ho"/></g>`,
		"fallback": "uix:restaurants-nearby",
	});
}

export default Component;
