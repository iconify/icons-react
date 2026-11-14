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
		"content": `<style>.wlk3b1b9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5h16L21 8l-2 2.5l2 2.5l-2 2.5l2 3H3V14a2 2 0 0 0 0-4Zm5 3v7");
}
</style><path class="wlk3b1b9x"/>`,
		"fallback": "uix-sharp:pin-ticket",
	});
}

export default Component;
