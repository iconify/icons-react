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
		"content": `<style>.slt7slekb {
  d: path("M4.5 4.5h15v11h-15Zm-2 14h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wgw2ohw9i {
  d: path("m12 6.5l3 1V10c0 1.75-1.25 2.75-3 3.5c-1.75-.75-3-1.75-3-3.5V7.5Z");
}
</style><g class="ulnmmdpxh"><path class="slt7slekb"/><path class="wgw2ohw9i"/></g>`,
		"fallback": "uix-sharp:laptop-shield",
	});
}

export default Component;
