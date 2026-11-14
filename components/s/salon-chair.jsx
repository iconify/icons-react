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
		"content": `<style>.dk-a0nb_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12h13v3H5Zm9-9.5h4V12h-4ZM11.5 15v4.5m-4.5 2a4.5 2 0 0 1 9 0Z");
}
</style><path class="dk-a0nb_j"/>`,
		"fallback": "uix-sharp:salon-chair",
	});
}

export default Component;
