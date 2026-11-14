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
		"content": `<style>.h6qtfcb6m {
  d: path("M7 5h10a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2.5L12 15.5L9.5 18H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4m5 3v4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q9hi0t1-l {
  d: path("m6.5 14.5l5.5-2l5.5 2");
}
</style><g class="hntgybcog"><path class="h6qtfcb6m"/><path class="q9hi0t1-l"/></g>`,
		"fallback": "uix:passthrough",
	});
}

export default Component;
