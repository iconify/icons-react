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

.i7cw460fa {
  d: path("M8.375 4h7.25A4.375 4.375 0 0 1 20 8.375v7.25A4.375 4.375 0 0 1 15.625 20h-7.25A4.375 4.375 0 0 1 4 15.625v-7.25A4.375 4.375 0 0 1 8.375 4M4 9h16");
}

.yd2h3olbi {
  d: path("M9.25 12h5.5a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-5.5a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 9.25 12M8 6.5h.01m3.99 0h.01");
}
</style><g class="hntgybcog"><path class="i7cw460fa"/><path class="yd2h3olbi"/></g>`,
		"fallback": "uix:oven-built-in",
	});
}

export default Component;
