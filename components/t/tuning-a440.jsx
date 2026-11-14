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
		"content": `<style>.pktfws8sr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5V10a3.5 3.5 0 0 0 7 0V2.5m-3.5 11v8m6.367-17.008a3.5 3.5 0 0 1 0 4.016m2.867-6.023a7 7 0 0 1 0 8.03");
}
</style><path class="pktfws8sr"/>`,
		"fallback": "uix-sharp:tuning-a440",
	});
}

export default Component;
