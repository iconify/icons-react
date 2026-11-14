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
		"content": `<style>.gva4a5bqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 18l4-15.5h4L18 18M3.75 18h4.5v3.5h-4.5Zm12 0h4.5v3.5h-4.5Z");
}
</style><path class="gva4a5bqd"/>`,
		"fallback": "uix-sharp:print-tongs",
	});
}

export default Component;
