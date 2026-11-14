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
		"content": `<style>.cyoqpbcln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 9.5l11 11m0-11l-11 11M6 5c2-2 4-1.75 6-.25s4 1.75 6-.25");
}
</style><path class="cyoqpbcln"/>`,
		"fallback": "uix-sharp:median",
	});
}

export default Component;
