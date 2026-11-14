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
		"content": `<style>.bro1400dm {
  d: path("M2.5 19.5c4.5-3 13.5-3.25 19-1.5c-4.5 4-13.5 4.5-19 1.5M9.25 9a2.75 3.5 0 1 0 5.5 0a2.75 3.5 0 1 0-5.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ky-d9tbad {
  d: path("m9.75 7l-2.5-1.75v-2.5m2 6.25l-3.5-1L4 6.25m5.5 4.25l-3.5 1l-1.5 2m6-1.5l-1.75 1.25l-.25 1.25M14.25 7l2.5-1.75v-2.5m-2 6.25l3.5-1L20 6.25m-5.5 4.25l3.5 1l1.5 2m-6-1.5l1.75 1.25l.25 1.25");
}
</style><g class="hntgybcog"><path class="bro1400dm"/><path class="ky-d9tbad"/></g>`,
		"fallback": "uix:pest-spider-mite",
	});
}

export default Component;
