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
		"content": `<style>.eupynoq0k {
  d: path("m3.697 4.601l4.289-1.43a1.75 1.75 0 0 1 1.035-.022l5.958 1.702a1.75 1.75 0 0 0 1.035-.022l3.183-1.061a1.75 1.75 0 0 1 2.303 1.66v12.311a1.75 1.75 0 0 1-1.197 1.66l-4.289 1.43a1.75 1.75 0 0 1-1.035.022l-5.958-1.702a1.75 1.75 0 0 0-1.035.022l-3.183 1.061a1.75 1.75 0 0 1-2.303-1.66V6.261a1.75 1.75 0 0 1 1.197-1.66");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o3yg2dkzr {
  d: path("M9.75 9L7 12l2.75 3m4.5-6L17 12l-2.75 3");
}
</style><g class="hntgybcog"><path class="eupynoq0k"/><path class="o3yg2dkzr"/></g>`,
		"fallback": "uix:source-code-map",
	});
}

export default Component;
