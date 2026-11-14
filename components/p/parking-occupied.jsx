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
		"content": `<style>.xc5ofdpzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3v18M21 3v18M6 17v-4.5L8 7h8l2 5.5V17Zm0-4.5h12M8.5 17v2.5m7-2.5v2.5");
}
</style><path class="xc5ofdpzy"/>`,
		"fallback": "uix-sharp:parking-occupied",
	});
}

export default Component;
