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
		"content": `<style>.m6bvkhuec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 11.25h3.5A1.75 1.75 0 0 1 9.5 13v6.75a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75V13a1.75 1.75 0 0 1 1.75-1.75m12 0h3.5A1.75 1.75 0 0 1 21.5 13v6.75a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75V13a1.75 1.75 0 0 1 1.75-1.75M4.5 6h15M17 3.5L19.5 6L17 8.5");
}
</style><path class="m6bvkhuec"/>`,
		"fallback": "uix:lateral-move",
	});
}

export default Component;
