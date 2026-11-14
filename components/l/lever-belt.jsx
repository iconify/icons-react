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
		"content": `<style>.xwpomobuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9H8m-5.5 6H8m8-6h5.5M16 15h5.5M10.625 6h2.75A2.625 2.625 0 0 1 16 8.625v6.75A2.625 2.625 0 0 1 13.375 18h-2.75A2.625 2.625 0 0 1 8 15.375v-6.75A2.625 2.625 0 0 1 10.625 6M12 9v5.5m0 0h.01");
}
</style><path class="xwpomobuy"/>`,
		"fallback": "uix:lever-belt",
	});
}

export default Component;
