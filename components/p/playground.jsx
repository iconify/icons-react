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
		"content": `<style>.y4utxma-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5V3m5 18.5V3m0 3.5c4.5 0 5.5 13 13 13m-18-10h5m-5 4h5m-5 4h5m-5-11h5");
}
</style><path class="y4utxma-u"/>`,
		"fallback": "uix:playground",
	});
}

export default Component;
