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
		"content": `<style>.egljiubos {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9h15v3.75h-15ZM3 12.75h18v3.75H3Zm.75 3.75h16.5v3.75H3.75ZM9 9c0-3 1.75-3 3-5c1.25 2 3 2 3 5");
}
</style><path class="egljiubos"/>`,
		"fallback": "uix-sharp:latkes",
	});
}

export default Component;
