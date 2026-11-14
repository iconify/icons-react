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
		"content": `<style>.vxpor-bis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.621 4.263l3.668.78a2.625 2.625 0 0 1 2.022 3.113l-1.819 8.559a2.625 2.625 0 0 1-3.113 2.022l-3.668-.78a2.625 2.625 0 0 1-2.022-3.113l1.819-8.559a2.625 2.625 0 0 1 3.113-2.022M19.75 9.75L21.5 7.5m-18.75-1l2 1.75");
}
</style><path class="vxpor-bis"/>`,
		"fallback": "uix:red-card",
	});
}

export default Component;
