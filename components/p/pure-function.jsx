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
		"content": `<style>.th-e_1ljg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5c-1.75-.75-3.25 0-3.5 2l-1.25 13c-.25 2-1.5 2.75-2.75 2.25M4 9.5h5m4-4q-3 6.5 0 13m6-13q3 6.5 0 13M14.25 9l3.5 6m0-6l-3.5 6");
}
</style><path class="th-e_1ljg"/>`,
		"fallback": "uix-sharp:pure-function",
	});
}

export default Component;
