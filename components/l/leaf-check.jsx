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
		"content": `<style>.ruwc54lnb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 16.5c-2-8 3.5-14 14-14c0 9.5-6 15.5-14 14Zm-1.75 1.75L12.5 8.5m2.25 9.5l2 2L21 15.75");
}
</style><path class="ruwc54lnb"/>`,
		"fallback": "uix-sharp:leaf-check",
	});
}

export default Component;
