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
		"content": `<style>.wdzpnp8-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5h3.1m7.8 0h8.1m-19 5h8.1m7.8 0h3.1M4 8v8m16-8v8M3.5 3.5l17 17");
}
</style><path class="wdzpnp8-l"/>`,
		"fallback": "uix-sharp:line-closed",
	});
}

export default Component;
