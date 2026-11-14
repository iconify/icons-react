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
		"content": `<style>.t8ehc_8gw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21l9.5-9.5m0 0V6a5.5 5.5 0 0 1 5.5 5.5Zm0-5.5V2.5m2.75 4.25l1.75-3m.25 5l3-1.75M18 11.5h3.5");
}
</style><path class="t8ehc_8gw"/>`,
		"fallback": "uix-sharp:rake-fan",
	});
}

export default Component;
