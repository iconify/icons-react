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
		"content": `<style>.hqfaux67f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9h10v12.5H7Zm1.5-6.5h7V9h-7Zm2.25 3.25h2.5M9.75 13l4.5 5m0-5l-4.5 5");
}
</style><path class="hqfaux67f"/>`,
		"fallback": "uix-sharp:usb-stick-x",
	});
}

export default Component;
