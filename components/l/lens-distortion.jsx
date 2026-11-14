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

.hq5e0hzjl {
  d: path("M9.5 4q-1 8 0 16m5-16q1 8 0 16");
}

.mhrzs30pu {
  d: path("M4 9.5q8-1 16 0m-16 5q8 1 16 0");
}

.y0jea7f2k {
  d: path("M5 5q7-2.5 14 0q2.5 7 0 14q-7 2.5-14 0q-2.5-7 0-14");
}
</style><g class="hntgybcog"><path class="y0jea7f2k"/><path class="hq5e0hzjl"/><path class="mhrzs30pu"/></g>`,
		"fallback": "uix:lens-distortion",
	});
}

export default Component;
