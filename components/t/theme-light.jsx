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
		"content": `<style>.ziy72ildg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0ZM12 3.5h.01m-.01 17h.01M3.5 12h.01m16.99 0h.01M6 6h.01M18 18h.01M18 6h.01M6 18h.01");
}
</style><path class="ziy72ildg"/>`,
		"fallback": "uix-sharp:theme-light",
	});
}

export default Component;
