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
		"content": `<style>.yp0qn4-jv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 7l3-2.5L9 7l3-2.5L15 7l3-2.5L21 7M3 13l3-2.5L9 13l3-2.5l3 2.5l3-2.5l3 2.5M3 19l3-2.5L9 19l3-2.5l3 2.5l3-2.5l3 2.5");
}
</style><path class="yp0qn4-jv"/>`,
		"fallback": "uix:wave-choppy",
	});
}

export default Component;
