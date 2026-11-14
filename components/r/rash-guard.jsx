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
		"content": `<style>.uwvsv0rcx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3a3 2.5 0 0 0 6 0l4.5 2.5l2 13l-2.75.5l-2-9v11h-9.5V10l-2 9l-2.75-.5l2-13Zm.5 1.25L7.25 10m7.25-5.75L16.75 10");
}
</style><path class="uwvsv0rcx"/>`,
		"fallback": "uix-sharp:rash-guard",
	});
}

export default Component;
