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
		"content": `<style>.eq45g_daq {
  d: path("M6 4h12a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 18 16H6a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 6 4m0 12v3.5m4-3.5v3.5m4-3.5v3.5m4-3.5v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jov7ywodi {
  d: path("M5.5 13.25L9 9.5l3.5 1.5l6-4.25");
}
</style><g class="hntgybcog"><path class="eq45g_daq"/><path class="jov7ywodi"/></g>`,
		"fallback": "uix:memory-profile",
	});
}

export default Component;
