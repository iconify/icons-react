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
		"content": `<style>.u295bub8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 8V2.75h3V8M8.75 8h6.5v4h-6.5zM12 12v9.25M2.75 19.5H9m6 0h6.25m-12.75-3L6.75 15m8.75 1.5l1.75-1.5");
}
</style><path class="u295bub8w"/>`,
		"fallback": "iconoven:pile-driver-sharp",
	});
}

export default Component;
