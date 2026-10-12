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
		"content": `<style>.ecugc4b5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.25h18.5v-7h-12c-3.25 0-5.5 3-6.5 7Zm6.75-7l1-3.25H19v3.25M9 3c-.9 1.15.9 2.1 0 3.25M13 3c-.9 1.15.9 2.1 0 3.25M17 3c-.9 1.15.9 2.1 0 3.25");
}
</style><path class="ecugc4b5j"/>`,
		"fallback": "iconoven:iron-clothes-sharp",
	});
}

export default Component;
