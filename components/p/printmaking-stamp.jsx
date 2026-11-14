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

.kzp_6_b6q {
  d: path("m10.25 8.5l-.5 4H5A1.5 1.5 0 0 0 3.5 14v2.5h17V14a1.5 1.5 0 0 0-1.5-1.5h-4.75l-.5-4M5 20h14");
}

.p4a-_ktdj {
  d: path("M9 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="p4a-_ktdj"/><path class="kzp_6_b6q"/></g>`,
		"fallback": "uix:printmaking-stamp",
	});
}

export default Component;
