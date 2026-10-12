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
		"content": `<style>.h3vrcqvle {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.75h10.25v18.5H4.75V6.5ZM10.25 6v3M13 6v3m2.75-3v3");
}
</style><path class="h3vrcqvle"/>`,
		"fallback": "iconoven:sd-card-lock-sharp",
	});
}

export default Component;
