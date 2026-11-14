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
		"content": `<style>.irrmg3bik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.75h19l-2 6.25h-15Zm1.5 0a3 3 0 0 1 6 0m0 0a3.5 3.5 0 0 1 7 0m0 0a1.75 1.75 0 0 1 3.5 0");
}
</style><path class="irrmg3bik"/>`,
		"fallback": "uix:pebble-tray",
	});
}

export default Component;
