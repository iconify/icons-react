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
		"content": `<style>.ghdle1bhl {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 16.125v-8.25A4.375 4.375 0 0 1 6.875 3.5M2.5 8h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xy-dlx-ly {
  d: path("m5 10.75l1.75 1.5L5 13.75m5.25-3h6.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-6.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m2.25 4.75h3A1.5 1.5 0 0 1 17 17a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 11 17a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="ghdle1bhl"/><path class="xy-dlx-ly"/></g>`,
		"fallback": "uix:query-builder",
	});
}

export default Component;
