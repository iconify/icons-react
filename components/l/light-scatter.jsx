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
		"content": `<style>.qwutgfx3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h5m0 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8 0h6m-7.25-3.5l4.25-3.75M14.25 15.5l4.25 3.75");
}
</style><path class="qwutgfx3e"/>`,
		"fallback": "uix:light-scatter",
	});
}

export default Component;
