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
		"content": `<style>.oxkjhp_ve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7h15v7h-15Zm0 2.5c-2.5 0-4 1.5-4 4V17m7-6v3m3-3v3m3-3v3m3-3v3");
}
</style><path class="oxkjhp_ve"/>`,
		"fallback": "uix-sharp:melodica",
	});
}

export default Component;
