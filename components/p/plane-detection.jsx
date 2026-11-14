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
		"content": `<style>.t3dhywbvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 16.5H21L17.5 21H3Zm-2-10V3H8m8 0h3.5v3.5M4.5 10v3.5H8M19.5 10v3.5H16");
}
</style><path class="t3dhywbvl"/>`,
		"fallback": "uix-sharp:plane-detection",
	});
}

export default Component;
