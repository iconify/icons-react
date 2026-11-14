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
		"content": `<style>.sr0x3qtjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8c0-4 13-4 13 0ZM7 8v13.5M17 8v13.5m-12 0h14M9.5 11.25h5");
}
</style><path class="sr0x3qtjc"/>`,
		"fallback": "uix-sharp:pin-post-box",
	});
}

export default Component;
