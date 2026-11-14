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
		"content": `<style>.k0de2km9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm5 0V3c1.5 3 6 3 6 7m-1.25 8a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm5-3a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm0 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM16 17.5l3.5-2m-3.5 3l3.5 2");
}
</style><path class="k0de2km9r"/>`,
		"fallback": "uix-sharp:music-distribution",
	});
}

export default Component;
