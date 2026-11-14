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
		"content": `<style>.ste-y5v1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13H19l-1.5 8.5H5ZM14 3.5h4.5V10H14Zm2.25 6.5v8.5M7.5 13V9.5c-.25-2.75-2-4.5-4-4.5c0 2.5 1.5 4.5 4 4.5c.25-3 1.75-5 3.5-5c0 2.75-1.5 5-3.5 5");
}
</style><path class="ste-y5v1l"/>`,
		"fallback": "uix-sharp:plant-sensor",
	});
}

export default Component;
