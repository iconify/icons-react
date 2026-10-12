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
		"content": `<style>.ke95rebfc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 21.25L8 2.75m11.75 18.5L16 2.75m-6.25 7l4.5 4.5m0-4.5l-4.5 4.5");
}
</style><path class="ke95rebfc"/>`,
		"fallback": "iconoven:road-closed-sharp",
	});
}

export default Component;
