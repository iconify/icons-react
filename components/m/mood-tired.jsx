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
		"content": `<style>.exnvi0bhb {
  d: path("M10 15.5a2 2.5 0 1 0 4 0a2 2.5 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jven9lbmr {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M7 10.25l3.25-.75m3.5 0l3.25.75");
}
</style><g class="hntgybcog"><path class="jven9lbmr"/><path class="exnvi0bhb"/></g>`,
		"fallback": "uix:mood-tired",
	});
}

export default Component;
