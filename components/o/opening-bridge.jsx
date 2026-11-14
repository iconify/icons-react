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
		"content": `<style>.noi91p8-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5H8l2.25-8m11.25 8H16l-2.25-8M8 13.5v6m8-6v6m-13.5 0h19");
}
</style><path class="noi91p8-u"/>`,
		"fallback": "uix-sharp:opening-bridge",
	});
}

export default Component;
