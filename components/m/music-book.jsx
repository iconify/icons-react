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
		"content": `<style>.gyxdkdbra {
  d: path("M5 19a2.5 2.5 0 0 1 2.5-2.5H19m-9.75-5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0V6l2.75 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hv39w4b5a {
  d: path("M5 19V5a2.5 2.5 0 0 1 2.5-2.5H19v19H7.5A2.5 2.5 0 0 1 5 19");
}
</style><g class="hntgybcog"><path class="hv39w4b5a"/><path class="gyxdkdbra"/></g>`,
		"fallback": "uix:music-book",
	});
}

export default Component;
