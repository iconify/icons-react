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
		"content": `<style>.y1fifsbbj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11.75h17m-13 5.75L12 14l4.5 3.5v4h-9Zm6.25-12.75c-.25-.75-.85-1-1.75-1c-1.1 0-1.75.5-1.75 1.25c0 1.5 3.5 1 3.5 2.5c0 .75-.75 1.25-1.75 1.25s-1.65-.35-1.75-1M12 2.5v1.25m0 5v.75");
}
</style><path class="y1fifsbbj"/>`,
		"fallback": "uix-sharp:loan-to-value",
	});
}

export default Component;
