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
		"content": `<style>.zdf4r7v7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.6 18.5H2.5v-16h18v9.1m-18-4.1h18m-18 5h17.1M9.5 2.5v16m5.25 2.75l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="zdf4r7v7t"/>`,
		"fallback": "uix-sharp:tax-rate-table",
	});
}

export default Component;
