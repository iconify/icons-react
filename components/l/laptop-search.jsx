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

.wyv6e4r1s {
  d: path("M8.75 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm4.5 2L15 13.25");
}
</style><g class="ulnmmdpxh"><path class="slt7slekb"/><path class="wyv6e4r1s"/></g>`,
		"fallback": "uix-sharp:laptop-search",
	});
}

export default Component;
