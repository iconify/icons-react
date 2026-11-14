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
		"content": `<style>.n9iat_bka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 4h9l1 11h-11Zm-5 15q2.375-2 4.75 0T12 19t4.75 0t4.75 0M7 8.5h10");
}
</style><path class="n9iat_bka"/>`,
		"fallback": "uix-sharp:port-hand-mark",
	});
}

export default Component;
