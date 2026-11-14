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
		"content": `<style>.nat-qurwr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m1 2.5l-.495.495m-3.96 3.96L4 20m2.5-2.5l2 2M9 15l1.75 1.75M3.5 3.5l17 17");
}
</style><path class="nat-qurwr"/>`,
		"fallback": "uix:revoke-all",
	});
}

export default Component;
