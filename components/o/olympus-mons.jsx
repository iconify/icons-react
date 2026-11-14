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
		"content": `<style>.pnxt2d1in {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 16.5c3-1 4.5-7.5 6-9L10.75 9h2.5l1.25-1.5c1.5 1.5 3 8 6 9M2 16.5h20");
}
</style><path class="pnxt2d1in"/>`,
		"fallback": "uix-sharp:olympus-mons",
	});
}

export default Component;
