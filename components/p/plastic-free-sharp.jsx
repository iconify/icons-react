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
		"content": `<style>.i8624obdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4v3l3.25 1.463V21.25H6.75V7.213L10 5.75Zm-6.25 1l16.5 16.5");
}
</style><path class="i8624obdk"/>`,
		"fallback": "iconoven:plastic-free-sharp",
	});
}

export default Component;
