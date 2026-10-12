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
		"content": `<style>.l-kc_eboh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 3h2.5v2l2 .857v7.393h-6.5V5.857l2-.857Zm-8 13.5c1.5 0 1.5-1 3.08-1c1.5 0 1.5 1 3.08 1c1.5 0 1.5-1 3.08-1c1.5 0 1.5 1 3.08 1c1.5 0 1.5-1 3.08-1c1.5 0 1.5 1 3.08 1m-18.48 4c1.5 0 1.5-1 3.08-1c1.5 0 1.5 1 3.08 1c1.5 0 1.5-1 3.08-1c1.5 0 1.5 1 3.08 1c1.5 0 1.5-1 3.08-1c1.5 0 1.5 1 3.08 1");
}
</style><path class="l-kc_eboh"/>`,
		"fallback": "iconoven:ocean-plastic-sharp",
	});
}

export default Component;
