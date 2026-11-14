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
		"content": `<style>.qwvu1lrxv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 17h17L19 20.5H5Zm8.5 0V9m0 0c-3 0-4.5 2-5 4m5-4c3 0 4.5 2 5 4m-5-9.5v2M8.5 6h.01m6.99 0h.01");
}
</style><path class="qwvu1lrxv"/>`,
		"fallback": "uix-sharp:mall-fountain",
	});
}

export default Component;
