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
		"content": `<style>.kkrukxoya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6 5.75l-4-1v5L3.5 21M6 14.5L9 21m7-16.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2 5.75l4-1v5l2.5 6.5M18 14.5L15 21m-3-4.5v5");
}
</style><path class="kkrukxoya"/>`,
		"fallback": "uix:kumite",
	});
}

export default Component;
