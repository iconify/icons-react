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
		"content": `<style>.n8istnbmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v7H3Zm9.1 17H3v-7.5h16.6m-12.85-6h.01m-.01 9.75h.01M11.5 6.5h6m-2.75 14.75l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="n8istnbmu"/>`,
		"fallback": "uix-sharp:uptime-percent",
	});
}

export default Component;
