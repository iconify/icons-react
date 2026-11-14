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
		"content": `<style>.bxhgl-gfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m5-2.25v4.5M9.75 12h4.5m3.25-5.5l2-2m-13 2l-2-2m13 13l2 2m-13-2l-2 2");
}
</style><path class="bxhgl-gfm"/>`,
		"fallback": "uix:positive-charge",
	});
}

export default Component;
