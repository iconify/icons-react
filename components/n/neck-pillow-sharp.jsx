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
		"content": `<style>.kph4-ebkw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.98 18.67a8.75 8.75 0 1 1 10.04 0a2.38 2.38 0 0 1-2.73-3.89a4 4 0 1 0-4.58 0a2.38 2.38 0 0 1-2.73 3.89ZM12 2.75V7.5");
}
</style><path class="kph4-ebkw"/>`,
		"fallback": "iconoven:neck-pillow-sharp",
	});
}

export default Component;
