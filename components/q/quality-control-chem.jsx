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
		"content": `<style>.ihwhhdcln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3v6L4.5 19q-.75 2 1.5 2h7.806m3.658-5.702L14 9V3M8.5 3h7m-.75 15l2 2L21 15.75");
}
</style><path class="ihwhhdcln"/>`,
		"fallback": "uix:quality-control-chem",
	});
}

export default Component;
