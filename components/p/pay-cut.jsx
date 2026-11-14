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
		"content": `<style>.ool9pdb4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5H7v13H2.5Zm7.25 4h4.5v9h-4.5Zm7.25 4h4.5v5H17Zm-14.5-5H7m-4.5 3.25H7M2.5 18H7m2.75-2.5h4.5m-4.5 3h4.5M17 19h4.5M10 3l10.5 9.5m0-3.5v3.5H17");
}
</style><path class="ool9pdb4t"/>`,
		"fallback": "uix-sharp:pay-cut",
	});
}

export default Component;
