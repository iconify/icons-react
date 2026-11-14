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
		"content": `<style>.huhr8ib1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5h19l-2.5 5H5Zm3 0V6h5v7.5m3 0V6h5v7.5");
}
</style><path class="huhr8ib1t"/>`,
		"fallback": "uix-sharp:lab-tray",
	});
}

export default Component;
