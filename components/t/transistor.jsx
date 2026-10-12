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

.j4tlezknq {
  d: path("M2.75 12h7m0-2l5-3.25v-4M9.75 14l5 3.25v4m-2.81-4.34l2.56.18l-1.2-2.28M9.75 7.5v9");
}

.z_ww9gnmb {
  d: path("M21.25 12a8.25 8.25 0 1 1-16.5 0a8.25 8.25 0 1 1 16.5 0");
}
</style><g class="hntgybcog"><path class="z_ww9gnmb"/><path class="j4tlezknq"/></g>`,
		"fallback": "iconoven:transistor",
	});
}

export default Component;
