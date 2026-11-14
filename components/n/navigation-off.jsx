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
		"content": `<style>.w4y4qpbgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.517 6.601L12 3l3.541 8.6m-3.327 4.523L12 16l-7 4l3.233-7.851M3.5 3.5l17 17");
}
</style><path class="w4y4qpbgj"/>`,
		"fallback": "uix-sharp:navigation-off",
	});
}

export default Component;
