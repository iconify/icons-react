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

.jr933wb2x {
  d: path("M11.25 12h1.5a4.5 4.5 0 0 1 0 9h-1.5M12 2.5V9M9.5 6.5L12 9l2.5-2.5m-12 0l4 4m-2.75 0H6.5V7.75m15-1.25l-4 4m2.75 0H17.5V7.75");
}

.yx-_kdi_m {
  d: path("M6.75 16.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="yx-_kdi_m"/><path class="jr933wb2x"/></g>`,
		"fallback": "uix:treasury-cash-pooling",
	});
}

export default Component;
