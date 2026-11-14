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
		"content": `<style>.qwpyxfzkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8h17m-4-4l4 4l-4 4m4 4h-17m4-4l-4 4l4 4");
}
</style><path class="qwpyxfzkg"/>`,
		"fallback": "uix-sharp:network-io",
	});
}

export default Component;
