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
		"content": `<style>.qu7jzybes {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.778 11h8.444a1.75 1.75 0 0 1 1.691 2.201l-1.067 4a1.75 1.75 0 0 1-1.69 1.299H7.844a1.75 1.75 0 0 1-1.69-1.299l-1.067-4A1.75 1.75 0 0 1 6.778 11M2.5 18.5H18v3h3.5M11 11V7m0 2.5c-3 0-5.5-2-5.5-5c3 0 5.5 2 5.5 5M11 7c0-2.5 2.5-4.5 5.5-4.5C16.5 5 14 7 11 7");
}
</style><path class="qu7jzybes"/>`,
		"fallback": "uix:planter-street",
	});
}

export default Component;
