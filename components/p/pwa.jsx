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
		"content": `<style>.h_pztbwuz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.1 19H2.5V3h18v7.1m-18-2.6h18m-.25 6.25l-4 4h4l-4 4");
}
</style><path class="h_pztbwuz"/>`,
		"fallback": "uix-sharp:pwa",
	});
}

export default Component;
