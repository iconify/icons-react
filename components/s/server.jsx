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
		"content": `<style>.xq096syjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3.5h11A3.5 3.5 0 0 1 21 7a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 7a3.5 3.5 0 0 1 3.5-3.5m0 10h11A3.5 3.5 0 0 1 21 17a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17a3.5 3.5 0 0 1 3.5-3.5M6.75 7h.01m-.01 10h.01M11.5 7h6m-6 10h6");
}
</style><path class="xq096syjs"/>`,
		"fallback": "uix:server",
	});
}

export default Component;
