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
		"content": `<style>.mcwevfy1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9h10v12.5h-10ZM6 2.5h7V9H6Zm2.25 3.25h2.5m4 12.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm1 2.25l4.5-4.5");
}
</style><path class="mcwevfy1z"/>`,
		"fallback": "uix-sharp:usb-blocked",
	});
}

export default Component;
