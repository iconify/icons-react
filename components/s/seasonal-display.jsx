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
		"content": `<style>.s0559abef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 16h17v5.5h-17ZM12 2.5l4.5 6h-2.25l3.25 5h-11l3.25-5H7.5Zm0 11V16m-5.5 2.75h11");
}
</style><path class="s0559abef"/>`,
		"fallback": "uix-sharp:seasonal-display",
	});
}

export default Component;
