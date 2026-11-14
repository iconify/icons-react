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
		"content": `<style>.gno9empdi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8h5.75a3.5 3.5 0 0 1 3.5 3.5v.25a3.5 3.5 0 0 1-3.5 3.5H6a3.5 3.5 0 0 1-3.5-3.5v-.25A3.5 3.5 0 0 1 6 8m-.5 0V3m6.75 5V3M18 15v6m-3-3h6");
}
</style><path class="gno9empdi"/>`,
		"fallback": "uix:modem-plus",
	});
}

export default Component;
