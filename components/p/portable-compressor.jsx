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

.i43y08ysb {
  d: path("M6 7.5h6a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17v-6A3.5 3.5 0 0 1 6 7.5m0 0v-3h6v3m3.5 8.5c6 0 6-6.5 3-6.5");
}

.va1r92bom {
  d: path("M5.75 14a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M9 14l1.5-1.5");
}
</style><g class="hntgybcog"><path class="i43y08ysb"/><path class="va1r92bom"/></g>`,
		"fallback": "uix:portable-compressor",
	});
}

export default Component;
