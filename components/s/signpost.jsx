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
		"content": `<style>.vywi_db0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5h12.5L20 7.5L17.5 10H5Zm14 7.5H6.5L4 15l2.5 2.5H19Zm-7-10V5m0 5v2.5m0 5v4");
}
</style><path class="vywi_db0t"/>`,
		"fallback": "uix-sharp:signpost",
	});
}

export default Component;
