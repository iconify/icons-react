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
		"content": `<style>.cv4_cfgwf {
  d: path("M6.25 19.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m8 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M2.5 21h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qeb8g2bbc {
  d: path("M7.875 7.5h8.25a4.375 4.375 0 0 1 4.375 4.375v1.25a4.375 4.375 0 0 1-4.375 4.375h-8.25A4.375 4.375 0 0 1 3.5 13.125v-1.25A4.375 4.375 0 0 1 7.875 7.5M3 2.5h18m-9 0V5M9 7.5L12 5l3 2.5m-11.5 4h17");
}
</style><g class="hntgybcog"><path class="qeb8g2bbc"/><path class="cv4_cfgwf"/></g>`,
		"fallback": "uix:light-rail",
	});
}

export default Component;
