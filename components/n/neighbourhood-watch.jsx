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

.mnh1ufbbh {
  d: path("M7 14.5c1.5-2 3-2.75 5-2.75s3.5.75 5 2.75c-1.5 2-3 2.75-5 2.75s-3.5-.75-5-2.75m5 0h.01");
}

.w2hyracve {
  d: path("M3.5 11L12 3.5l8.5 7.5v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19Z");
}
</style><g class="hntgybcog"><path class="w2hyracve"/><path class="mnh1ufbbh"/></g>`,
		"fallback": "uix:neighbourhood-watch",
	});
}

export default Component;
