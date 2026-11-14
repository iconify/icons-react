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
		"content": `<style>.zmtri2tnw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12V3.5H12l8.5 8.5l-8.5 8.5ZM8 8h.01m6.49 2.5l-4 4M11 11h.01M14 14h.01");
}
</style><path class="zmtri2tnw"/>`,
		"fallback": "uix-sharp:premium-discount",
	});
}

export default Component;
