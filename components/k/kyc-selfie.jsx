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
		"content": `<style>.n6bl4yb7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 9a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM4.5 20.5c.5-4 3.5-6 7.5-6s7 2 7.5 6M2.5 6V3.5H5");
}
</style><path class="n6bl4yb7v"/>`,
		"fallback": "uix-sharp:kyc-selfie",
	});
}

export default Component;
