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
		"content": `<style>.d5xq9zbyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h9.1m-7.1 0V15m4 5.5v-10m4 9.1V4.5m2.25 16.75l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="d5xq9zbyb"/>`,
		"fallback": "uix-sharp:tax-chart",
	});
}

export default Component;
