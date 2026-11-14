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
		"content": `<style>.fc6nm_bhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 10h12a3.5 3.5 0 0 1 3.5 3.5v4A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5v-4A3.5 3.5 0 0 1 6 10M4.5 4h3l-1 6h-1Zm6 0h3l-1 6h-1Zm6 0h3l-1 6h-1Z");
}
</style><path class="fc6nm_bhe"/>`,
		"fallback": "uix:pipette-tip-box",
	});
}

export default Component;
