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

.mw27chupn {
  d: path("M5 13a7 7 0 0 1 14 0M5.75 13h12.5A1.75 1.75 0 0 1 20 14.75v5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 19.75v-5A1.75 1.75 0 0 1 5.75 13M13 10l5.5-6");
}

.q4ds48o1k {
  d: path("M11.5 16.5h1A1.5 1.5 0 0 1 14 18v2a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 10 20v-2a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="mw27chupn"/><path class="q4ds48o1k"/></g>`,
		"fallback": "uix:observatory-dome",
	});
}

export default Component;
