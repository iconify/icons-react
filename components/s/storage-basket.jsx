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
		"content": `<style>.g31kwac0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8h18l-2.5 11.5h-13Zm2.5 0a2.5 2.5 0 0 1 5 0m3 0a2.5 2.5 0 0 1 5 0M4.25 13.75h15.5");
}
</style><path class="g31kwac0x"/>`,
		"fallback": "uix-sharp:storage-basket",
	});
}

export default Component;
