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
		"content": `<style>.m5py0cbpr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10h18l-1.5 9a2 2 0 0 1-2 1.5h-11a2 2 0 0 1-2-1.5Zm4.5 0l3-6m6 6l-3-6");
}
</style><path class="m5py0cbpr"/>`,
		"fallback": "uix-sharp:shopping-basket-hand",
	});
}

export default Component;
