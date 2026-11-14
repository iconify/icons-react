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
		"content": `<style>.oisy5qrkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21V11a8 8 0 0 1 16 0v10h-5.5V11a2.5 2.5 0 0 0-5 0v10Zm0-4.5h5.5m5 0H20");
}
</style><path class="oisy5qrkb"/>`,
		"fallback": "uix-sharp:magnet",
	});
}

export default Component;
