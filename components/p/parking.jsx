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
		"content": `<style>.dv3btbcty {
  d: path("M10.875 3h2.25A7.875 7.875 0 0 1 21 10.875v2.25A7.875 7.875 0 0 1 13.125 21h-2.25A7.875 7.875 0 0 1 3 13.125v-2.25A7.875 7.875 0 0 1 10.875 3M9.25 17.5v-11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w1h-m4b1d {
  d: path("M9.25 6.5h4a3.5 3.5 0 0 1 0 7h-4");
}
</style><g class="hntgybcog"><path class="dv3btbcty"/><path class="w1h-m4b1d"/></g>`,
		"fallback": "uix:parking",
	});
}

export default Component;
