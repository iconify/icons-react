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
		"content": `<style>.p63ouybgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h7m5 0h7m-12-2h5v4h-5ZM5 10h14v8.5H5Zm7-3.5V10m0 8.5v3m-3 0h6");
}
</style><path class="p63ouybgi"/>`,
		"fallback": "uix-sharp:network-tap",
	});
}

export default Component;
