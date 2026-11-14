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
		"content": `<style>.dle1mslbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5h16v5l-2 9h-4.5L12 12.5L10.5 19H6l-2-9Zm0 3h16");
}
</style><path class="dle1mslbt"/>`,
		"fallback": "uix-sharp:swim-trunks",
	});
}

export default Component;
