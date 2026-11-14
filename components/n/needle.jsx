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
		"content": `<style>.ccv2m6imn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.303 3.868l2.829 2.829l-3.536 3.535l-2.828-2.828Zm-2.121 4.95l-9.9 9.9m7.779-12.021l4.242 4.242");
}
</style><path class="ccv2m6imn"/>`,
		"fallback": "uix-sharp:needle",
	});
}

export default Component;
