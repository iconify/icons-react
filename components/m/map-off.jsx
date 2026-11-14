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
		"content": `<style>.ssybbdc_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.892 3.962L9 3.5L15 6l6-2.5v13.6m-4.892 2.938L15 20.5L9 18l-6 2.5V6.9m6-3.4v1.6m0 7.8V18m6-12v5.1m0 7.8v1.6M3.5 3.5l17 17");
}
</style><path class="ssybbdc_v"/>`,
		"fallback": "uix-sharp:map-off",
	});
}

export default Component;
