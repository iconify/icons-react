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
		"content": `<style>.e7m7-9cnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 18 15H6a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 6 3M5 15v5.5h14V15M6 7h5M8.5 17.75h.01m3.49 0h.01m3.49 0h.01");
}
</style><path class="e7m7-9cnu"/>`,
		"fallback": "uix:plate-reader",
	});
}

export default Component;
