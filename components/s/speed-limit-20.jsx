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

.iw49jcbqb {
  d: path("M2.25 12a9.75 9.75 0 1 0 19.5 0a9.75 9.75 0 1 0-19.5 0");
}

.nkl72kbds {
  d: path("M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}

.sxp07tjbi {
  d: path("M8 10.5a1.375 1.375 0 0 1 2.75 0C10.75 12 8 13 8 15h2.75m4.125-6za1.375 1.375 0 0 1 1.375 1.375v3.25A1.375 1.375 0 0 1 14.875 15a1.375 1.375 0 0 1-1.375-1.375v-3.25A1.375 1.375 0 0 1 14.875 9");
}
</style><g class="hntgybcog"><path class="iw49jcbqb"/><path class="nkl72kbds"/><path class="sxp07tjbi"/></g>`,
		"fallback": "uix:speed-limit-20",
	});
}

export default Component;
