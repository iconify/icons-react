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
		"content": `<style>.h_5rwnbbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h6.5v19H3Zm11 0h5.5v13L16.75 21L14 15.5ZM3 6h2.75M3 9.5h2M3 13h2.75M3 16.5h2M14 6h5.5M14 15.5h5.5");
}
</style><path class="h_5rwnbbm"/>`,
		"fallback": "uix-sharp:pencil-ruler",
	});
}

export default Component;
