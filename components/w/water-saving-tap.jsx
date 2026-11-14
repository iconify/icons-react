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
		"content": `<style>.bnvs3pbmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5H8a4 4 0 0 1 4 4v2H8v-1a1 1 0 0 0-1-1H2.5m3.5-4V3M3.5 3h5M10 14.25c1.75 2.25 2 3 2 4.5a2 2 0 0 1-4 0c0-1.5.25-2.25 2-4.5m8 .25v7m-3-3l3 3l3-3");
}
</style><path class="bnvs3pbmw"/>`,
		"fallback": "uix:water-saving-tap",
	});
}

export default Component;
