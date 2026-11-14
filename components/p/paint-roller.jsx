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

.py7pqxbad {
  d: path("M5.625 2.5h9.75A2.625 2.625 0 0 1 18 5.125v.25A2.625 2.625 0 0 1 15.375 8h-9.75A2.625 2.625 0 0 1 3 5.375v-.25A2.625 2.625 0 0 1 5.625 2.5");
}

.xz7j91zpo {
  d: path("M18 5.25h2.5v5.5H12V14m0 0za1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-4.5A1.5 1.5 0 0 1 12 14");
}
</style><g class="hntgybcog"><path class="py7pqxbad"/><path class="xz7j91zpo"/></g>`,
		"fallback": "uix:paint-roller",
	});
}

export default Component;
