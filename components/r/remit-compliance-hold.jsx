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
		"content": `<style>.j_478gbzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.725 17.897L12.5 20.5L10 15l-6.5-3.5l17-8l-4.22 8.968M10 15L20.5 3.5m-4 11.75v5.5m3-5.5v5.5");
}
</style><path class="j_478gbzz"/>`,
		"fallback": "uix-sharp:remit-compliance-hold",
	});
}

export default Component;
