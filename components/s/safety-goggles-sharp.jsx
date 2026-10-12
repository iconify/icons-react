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
		"content": `<style>.p-a44kpwc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8.5h12.5v7h-5L12 13.25L9.5 15.5h-5v-7zm3 0v2.25m4-2.25v2.25M2.75 12H4.5m15 0h1.75");
}
</style><path class="p-a44kpwc"/>`,
		"fallback": "iconoven:safety-goggles-sharp",
	});
}

export default Component;
