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
		"content": `<style>.fz5fwjekt {
  d: path("M8.5 15.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p3ndogbwf {
  d: path("m3.5 9l2-6.5h13l2 6.5v10.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2Zm0 0h17");
}
</style><g class="hntgybcog"><path class="p3ndogbwf"/><path class="fz5fwjekt"/></g>`,
		"fallback": "uix:top-load-washer",
	});
}

export default Component;
