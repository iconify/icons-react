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
		"content": `<style>.me3eet9bl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.7 14.5H2.5V3H19v8.1M8 14.5v5m-3 0h6m2.75-2a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm3.75-1.75v3.5");
}
</style><path class="me3eet9bl"/>`,
		"fallback": "uix-sharp:pay-per-view",
	});
}

export default Component;
