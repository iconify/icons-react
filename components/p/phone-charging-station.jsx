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
		"content": `<style>.h54_x7bqb {
  d: path("M10.5 5.5L7.75 10h3.5L8.5 14.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jr4vhd9jx {
  d: path("M8.875 2.5h1.25A4.375 4.375 0 0 1 14.5 6.875v6.25a4.375 4.375 0 0 1-4.375 4.375h-1.25A4.375 4.375 0 0 1 4.5 13.125v-6.25A4.375 4.375 0 0 1 8.875 2.5m.625 15V19a2.5 2.5 0 0 0 2.5 2.5h7.5");
}
</style><g class="hntgybcog"><path class="jr4vhd9jx"/><path class="h54_x7bqb"/></g>`,
		"fallback": "uix:phone-charging-station",
	});
}

export default Component;
