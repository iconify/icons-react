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
		"content": `<style>.sbz3xnbdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2 6c0-.75 1.75-1.25 4-1.25s4 .5 4 1.25m-6 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2 6C4 20.5 5.75 20 8 20s4 .5 4 1.25M17.5 20V4m-3 3l3-3l3 3");
}
</style><path class="sbz3xnbdc"/>`,
		"fallback": "uix:reports-to",
	});
}

export default Component;
