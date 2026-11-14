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
		"content": `<style>.f0h6ombgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10V6l-2.5 4v11.5h-5V10L7 6ZM7 6h10m-5 7v2.5");
}
</style><path class="f0h6ombgk"/>`,
		"fallback": "uix-sharp:torch",
	});
}

export default Component;
