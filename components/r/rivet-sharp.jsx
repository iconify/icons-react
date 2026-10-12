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
		"content": `<style>.m4cvkn-1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h13v3h-5v11.9l2 1.6H8l2-1.6V6.5H5v-3z");
}
</style><path class="m4cvkn-1b"/>`,
		"fallback": "iconoven:rivet-sharp",
	});
}

export default Component;
