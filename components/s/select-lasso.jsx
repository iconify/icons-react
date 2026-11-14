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

.oit33tu1l {
  d: path("M7.5 13.5c-2 1.5-2 4.5.5 5c1.5.25 1.5 2 0 3");
}

.u9w-iir2l {
  d: path("M4 9a8.5 5.5 0 1 0 17 0A8.5 5.5 0 1 0 4 9");
}
</style><g class="hntgybcog"><path class="u9w-iir2l"/><path class="oit33tu1l"/></g>`,
		"fallback": "uix:select-lasso",
	});
}

export default Component;
