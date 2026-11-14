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
		"content": `<style>.auaq0ng5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 7h13.75A2.625 2.625 0 0 1 21.5 9.625v4.75A2.625 2.625 0 0 1 18.875 17H5.125A2.625 2.625 0 0 1 2.5 14.375v-4.75A2.625 2.625 0 0 1 5.125 7M6.5 7v3.5M10 7v5.5M13.5 7v3.5M17 7v5.5");
}
</style><path class="auaq0ng5v"/>`,
		"fallback": "uix:ruler-horizontal",
	});
}

export default Component;
