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
		"content": `<style>.aanqabcyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 10.5c0 5 1.75 7 4.5 7s4.5-2 4.5-7Zm4.5 7v4m-3-11L6 4m6 6.5V3m3 7.5L18 4m-6 16c2-1.75 5-1.75 7-1c-2 2-5 2.25-7 1Z");
}
</style><path class="aanqabcyz"/>`,
		"fallback": "uix-sharp:thistle",
	});
}

export default Component;
