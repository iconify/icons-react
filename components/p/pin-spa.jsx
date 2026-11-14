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
		"content": `<style>.rd6_no31z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Zm2.75-5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM7.5 18l-1 2.5m10-2.5l1 2.5");
}
</style><path class="rd6_no31z"/>`,
		"fallback": "uix-sharp:pin-spa",
	});
}

export default Component;
