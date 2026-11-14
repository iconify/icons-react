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
		"content": `<style>.hgzds3nru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 7.5l-4 4.5l4 4.5m11-9l4 4.5l-4 4.5m-8-7h5m-1.75-1.75L14.5 9.5l-1.75 1.75m1.75 3.25h-5m1.75-1.75L9.5 14.5l1.75 1.75");
}
</style><path class="hgzds3nru"/>`,
		"fallback": "uix:transpile",
	});
}

export default Component;
