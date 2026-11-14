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
		"content": `<style>.sbnn45b0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3v11.5m0-3h15.5v3M5.75 8H18.5v3.5H5.75ZM8 17.25h13.5V21H8Z");
}
</style><path class="sbnn45b0q"/>`,
		"fallback": "uix-sharp:trundle-bed",
	});
}

export default Component;
