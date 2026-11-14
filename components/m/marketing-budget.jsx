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
		"content": `<style>.c-ibc-_xn {
  d: path("M13.5 10.25v-8a8 8 0 0 1 8 8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.woctahbxr {
  d: path("M10.75 5a8 8 0 1 0 8 8h-8Z");
}
</style><g class="ulnmmdpxh"><path class="woctahbxr"/><path class="c-ibc-_xn"/></g>`,
		"fallback": "uix-sharp:marketing-budget",
	});
}

export default Component;
