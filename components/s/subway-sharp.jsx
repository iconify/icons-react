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
		"content": `<style>.h6mxz8bbi {
  d: path("M3.5 21.25v-10a8.5 8.5 0 0 1 17 0v10");
}

.wghafyb5s {
  d: path("M7.75 8.5h8.5V18h-8.5zm0 3.5h8.5M9.5 18v2.5m5-2.5v2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="h6mxz8bbi"/><path class="wghafyb5s"/></g>`,
		"fallback": "iconoven:subway-sharp",
	});
}

export default Component;
