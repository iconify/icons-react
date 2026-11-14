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

.r-0jbv93d {
  d: path("M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9M3.5 21.5c0-1.75 3.5-2.75 8.5-2.75s8.5 1 8.5 2.75");
}

.ve8v-ccnb {
  d: path("M8 8.5h8c0 3-1.75 4.5-4 4.5s-4-1.5-4-4.5m.5 2h7");
}
</style><g class="hntgybcog"><path class="r-0jbv93d"/><path class="ve8v-ccnb"/></g>`,
		"fallback": "uix:orthodontist",
	});
}

export default Component;
