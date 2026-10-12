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
		"content": `<style>.my2c22b6u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.25h7v14h-7zm10 0h7v14h-7zM3.5 12h7m3 0h7M7 7.25v-4.5h10v4.5");
}
</style><path class="my2c22b6u"/>`,
		"fallback": "iconoven:oxygen-tank-space-sharp",
	});
}

export default Component;
