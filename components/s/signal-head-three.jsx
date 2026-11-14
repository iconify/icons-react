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
		"content": `<style>.c55y_ob7b {
  d: path("M10.5 6.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m0 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m0 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.d-5ofw8gj {
  d: path("M11.875 2h.25A4.375 4.375 0 0 1 16.5 6.375v11.25A4.375 4.375 0 0 1 12.125 22h-.25A4.375 4.375 0 0 1 7.5 17.625V6.375A4.375 4.375 0 0 1 11.875 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d-5ofw8gj"/><path class="c55y_ob7b"/></g>`,
		"fallback": "uix:signal-head-three",
	});
}

export default Component;
