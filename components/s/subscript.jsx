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
		"content": `<style>.nk2qa67_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6L12 17m0-11L3.5 17m12-1c0-1.25 1-2 2.25-2s2.25.75 2.25 2c0 2-4.5 3-4.5 5H20");
}
</style><path class="nk2qa67_b"/>`,
		"fallback": "uix-sharp:subscript",
	});
}

export default Component;
