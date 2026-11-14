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
		"content": `<style>.rwplcd7-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7.5h14l-1.5 9h-11ZM2.75 12h.01m18.49 0h.01M9 10.5h.01m2.99 0h.01m2.99 0h.01m-4.51 3h.01m2.99 0h.01");
}
</style><path class="rwplcd7-g"/>`,
		"fallback": "uix-sharp:port-vga",
	});
}

export default Component;
