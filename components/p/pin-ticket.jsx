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
		"content": `<style>.y1xvu3bcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5h16L21 8l-2 2.5l2 2.5l-2 2.5l2 3H3V14a2 2 0 0 0 0-4Zm5 3v7");
}
</style><path class="y1xvu3bcj"/>`,
		"fallback": "uix:pin-ticket",
	});
}

export default Component;
