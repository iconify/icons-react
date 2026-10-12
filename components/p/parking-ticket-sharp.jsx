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
		"content": `<style>.cy82y8t1r {
  d: path("M5.75 2.75h12.5v18.5H5.75zm3 3.25h6.5m-6.5 12.25h6.5");
}

.pf3jxvbty {
  d: path("M10.5 15.5V9.25h4v4h-4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cy82y8t1r"/><path class="pf3jxvbty"/></g>`,
		"fallback": "iconoven:parking-ticket-sharp",
	});
}

export default Component;
