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
		"content": `<style>.h_3km4bkw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14.5V5a2.5 2.5 0 0 1 5 0v9.5a4 4 0 1 1-5 0m8-7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M8 11v6.5");
}
</style><path class="h_3km4bkw"/>`,
		"fallback": "uix:temperature-celsius",
	});
}

export default Component;
