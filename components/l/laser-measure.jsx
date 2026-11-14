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

.st_u8fb2k {
  d: path("M5.125 7h3.25A2.625 2.625 0 0 1 11 9.625v7.75A2.625 2.625 0 0 1 8.375 20h-3.25A2.625 2.625 0 0 1 2.5 17.375v-7.75A2.625 2.625 0 0 1 5.125 7M21.5 4v14");
}

.u4i7vopwu {
  d: path("M6 9.5h1.5A1.5 1.5 0 0 1 9 11v.5A1.5 1.5 0 0 1 7.5 13H6a1.5 1.5 0 0 1-1.5-1.5V11A1.5 1.5 0 0 1 6 9.5m.75 7h.01M13 11h2m2 0h2");
}
</style><g class="hntgybcog"><path class="st_u8fb2k"/><path class="u4i7vopwu"/></g>`,
		"fallback": "uix:laser-measure",
	});
}

export default Component;
