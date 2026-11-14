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

.k7f8djbuj {
  d: path("M15.5 5H19a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 10h-3.5A2.5 2.5 0 0 1 13 7.5A2.5 2.5 0 0 1 15.5 5M5 14h3.5a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 8.5 19H5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 5 14m10.5 0H19a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 19h-3.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5");
}

.s47tzcczj {
  fill: currentColor;
  d: path("M5 5h3.5A2.5 2.5 0 0 1 11 7.5A2.5 2.5 0 0 1 8.5 10H5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 5 5");
}
</style><g class="hntgybcog"><path class="s47tzcczj"/><path class="k7f8djbuj"/></g>`,
		"fallback": "uix:slicer-buttons",
	});
}

export default Component;
