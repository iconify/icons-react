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

.jj5g7q0se {
  d: path("m12.319 7.513l1.504.981a1.5 1.5 0 0 1 0 2.512l-1.504.981A1.5 1.5 0 0 1 10 10.731V8.769a1.5 1.5 0 0 1 2.319-1.256M10 16.5L9 21m5-4.5l1 4.5m-7.5 0h9");
}

.vdxr4k_gq {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5V13a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13V6.5A3.5 3.5 0 0 1 6 3");
}
</style><g class="hntgybcog"><path class="vdxr4k_gq"/><path class="jj5g7q0se"/></g>`,
		"fallback": "uix:sprint-demo",
	});
}

export default Component;
