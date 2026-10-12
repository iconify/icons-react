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
		"content": `<style>.h0umhwbrc {
  d: path("M6.75 2.75h12.5v18.5l-2.4-1.5l-2.45 1.5l-2.4-1.5l-2.4 1.5l-2.45-1.5l-2.4 1.5V2.75z");
}

.m2wgly_mi {
  d: path("m10.75 7.25l-2 2l2 2m-2-2h4.5a2.25 2.25 0 0 1 0 4.5h-1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="h0umhwbrc"/><path class="m2wgly_mi"/></g>`,
		"fallback": "iconoven:refund-sharp",
	});
}

export default Component;
