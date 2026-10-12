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
		"content": `<style>.o2fafdc_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 3.25h7v18l-1.58-1.2l-1.58 1.2l-1.59-1.2l-1.58 1.2l-1.59-1.2l-1.58 1.2v-18zm-5.5 0h15.5M9.25 7h5.5m-5.5 3h5.5m-5.5 3h5.5m-5.5 3h3.5");
}
</style><path class="o2fafdc_w"/>`,
		"fallback": "iconoven:receipt-long-sharp",
	});
}

export default Component;
