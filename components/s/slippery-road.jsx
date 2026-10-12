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
		"content": `<style>.tykcqi8fs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 14.5v-3.25l1.75-4C6.8 6.5 7.5 6 8.25 6h7.5c.75 0 1.45.5 1.75 1.25l1.75 4v3.25Zm2.5-4h9.5M8 16.75c-2 1.25 1.25 3-1 4.5m9-4.5c2 1.25-1.25 3 1 4.5");
}
</style><path class="tykcqi8fs"/>`,
		"fallback": "iconoven:slippery-road",
	});
}

export default Component;
