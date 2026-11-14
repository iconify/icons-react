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
		"content": `<style>.szo_nob6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19h17.5v-5.5a2 2 0 0 0-2-2H11c-4.5 0-7 3-8 7.5Zm7.5-7.5l1-3.25h8l1 3.25m-15-2c-1-1.5 1-3.5 0-5M8.25 9c-1-1.5 1-3.5 0-5");
}
</style><path class="szo_nob6t"/>`,
		"fallback": "uix-sharp:steam-iron",
	});
}

export default Component;
