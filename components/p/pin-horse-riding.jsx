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
		"content": `<style>.ztd2qnbby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.5 21c0-5 1.5-8.5 1.5-12s-2.5-5.5-5-5.5l-1-1L12 4c-2.5 1-5 4-7.5 8.5c-1 1.5 0 3.5 2 3l3.5-1c1 2 .5 4.5-.5 6.5Zm-5-13h.01");
}
</style><path class="ztd2qnbby"/>`,
		"fallback": "uix-sharp:pin-horse-riding",
	});
}

export default Component;
