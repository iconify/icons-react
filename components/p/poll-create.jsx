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
		"content": `<style>.wkj7johls {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14a2 2 0 0 1 2 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 7h7a2 2 0 0 1 2 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 7h3.5a2 2 0 0 1 2 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2a2 2 0 0 1 2-2m13-2v6m-3-3h6");
}
</style><path class="wkj7johls"/>`,
		"fallback": "uix:poll-create",
	});
}

export default Component;
