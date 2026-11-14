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

.i50o_k5cx {
  d: path("M12 4.25L10.5 7.5l2.5 2l-1.5 3.5");
}

.w3wlrgbiz {
  d: path("M7 3C4.5 3 3.5 5 3.5 7.5c0 3 1.5 4.5 2 6.5l1.25 6c.25 1.25 1.75 1.25 2 0L10 15.5c.5-1.5 3.5-1.5 4 0l1.25 4.5c.25 1.25 1.75 1.25 2 0l1.25-6c.5-2 2-3.5 2-6.5C20.5 5 19.5 3 17 3c-2 0-3 1.25-5 1.25S9 3 7 3");
}
</style><g class="hntgybcog"><path class="w3wlrgbiz"/><path class="i50o_k5cx"/></g>`,
		"fallback": "uix:tooth-crack-line",
	});
}

export default Component;
