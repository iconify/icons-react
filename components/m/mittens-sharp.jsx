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
		"content": `<style>.ysmfpnbeq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 15.25v-7a4.75 4.75 0 0 1 9.5 0V10l1.6-1.6a1.6 1.6 0 0 1 2.3 2.25l-3.9 4v.6Zm-.75 0h11v6h-11z");
}
</style><path class="ysmfpnbeq"/>`,
		"fallback": "iconoven:mittens-sharp",
	});
}

export default Component;
