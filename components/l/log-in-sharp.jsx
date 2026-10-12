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
		"content": `<style>.sex6nfb-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.75 3.75h5.5v16.5h-5.5M3.75 12h10.5M10.5 8.25L14.25 12l-3.75 3.75");
}
</style><path class="sex6nfb-t"/>`,
		"fallback": "iconoven:log-in-sharp",
	});
}

export default Component;
