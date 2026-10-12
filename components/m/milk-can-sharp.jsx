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
		"content": `<style>.ruuv9isgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 3.25h7.5v2.5h-7.5zM9 5.75h6V9l2.75 2.5v9.75H6.25V11.5L9 9Zm-.5 9.75h7m-9.25-3.25H3v3h3.25m11.5-3H21v3h-3.25");
}
</style><path class="ruuv9isgs"/>`,
		"fallback": "iconoven:milk-can-sharp",
	});
}

export default Component;
