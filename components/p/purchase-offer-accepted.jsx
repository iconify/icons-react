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
		"content": `<style>.sywov0ksu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10A1.5 1.5 0 0 1 18.5 4v6.5A1.5 1.5 0 0 1 17 12H7a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 7 2.5Zm5 9.5v4.8m0 2.4v2.3M12 5v4.5m2.75 8.5l2 2L21 15.75");
}
</style><path class="sywov0ksu"/>`,
		"fallback": "uix-sharp:purchase-offer-accepted",
	});
}

export default Component;
