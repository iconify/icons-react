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
		"content": `<style>.dfmzizh1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.75 9.5l-1 1a4 4 0 0 0 5.75 5.75l1-1m-2-9.5l1-1a4 4 0 0 1 5.75 5.75l-1 1m-7 1.25l4.5-4.5m8.5 6.5L15.5 20.5m-.25-4.25v4.5h4.5");
}
</style><path class="dfmzizh1i"/>`,
		"fallback": "uix-sharp:referral-traffic",
	});
}

export default Component;
