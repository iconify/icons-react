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
		"content": `<style>.l14je_bno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5H21M9.5 12H21M9.5 19H21M3 3.5l3 3m0-3l-3 3m0 4l3 3m0-3l-3 3m0 4l3 3m0-3l-3 3");
}
</style><path class="l14je_bno"/>`,
		"fallback": "uix:snag-list",
	});
}

export default Component;
