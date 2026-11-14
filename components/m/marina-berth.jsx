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
		"content": `<style>.eu44dvr4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16h18l-2.5 4h-13Zm9-12.5V16m0-12.5l6 9.5h-6m0-6.5L7 13h5");
}
</style><path class="eu44dvr4i"/>`,
		"fallback": "uix:marina-berth",
	});
}

export default Component;
