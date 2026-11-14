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
		"content": `<style>.e7wdn-bbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5V4M7 20.5V9m4.5 11.5v-2.1m0-.3v-4.6m6.5 1V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="e7wdn-bbv"/>`,
		"fallback": "uix-sharp:revenue-down",
	});
}

export default Component;
