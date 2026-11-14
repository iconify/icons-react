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
		"content": `<style>.exoh6o5hl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5za4.5 4.5 0 0 1 4.5 4.5v6a4.5 4.5 0 0 1-4.5 4.5A4.5 4.5 0 0 1 7.5 17v-6A4.5 4.5 0 0 1 12 6.5m-1.5 0v-3h3v3m0-1.5H17m-9.5 6h9");
}
</style><path class="exoh6o5hl"/>`,
		"fallback": "uix:scuba-tank",
	});
}

export default Component;
