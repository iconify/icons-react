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
		"content": `<style>.w_i6_d2qx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 6h9A3.5 3.5 0 0 1 20 9.5V14a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 14V9.5A3.5 3.5 0 0 1 7.5 6M8 6v11.5M12 6v11.5M16 6v11.5m-10 3v-3m12 3v-3");
}
</style><path class="w_i6_d2qx"/>`,
		"fallback": "uix:radiator",
	});
}

export default Component;
