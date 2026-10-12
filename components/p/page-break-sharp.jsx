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
		"content": `<style>.mrjdu6b4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 10V2.75h9l4.5 4.5V10m-4.5-7.25v4.5h4.5M5.25 14v7.25h13.5V14m-16-2h3m4.75 0h3m4.75 0h3");
}
</style><path class="mrjdu6b4t"/>`,
		"fallback": "iconoven:page-break-sharp",
	});
}

export default Component;
