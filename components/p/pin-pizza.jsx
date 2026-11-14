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
		"content": `<style>.fv10o695i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 21.5l-7.5-14h15Zm-8.5-17q8.5-3 17 0M10 11h.01m3.24 1.5h.01");
}
</style><path class="fv10o695i"/>`,
		"fallback": "uix-sharp:pin-pizza",
	});
}

export default Component;
