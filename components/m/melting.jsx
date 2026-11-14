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
		"content": `<style>.wqd0xzbfc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5v2a1.5 1.5 0 0 1-3 0v-2H7a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2M3.5 19.75a8.5 1.75 0 1 0 17 0a8.5 1.75 0 1 0-17 0M16 15h.01");
}
</style><path class="wqd0xzbfc"/>`,
		"fallback": "uix:melting",
	});
}

export default Component;
