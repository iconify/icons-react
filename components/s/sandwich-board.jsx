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
		"content": `<style>.k4jdfj__x {
  d: path("M7.5 2.5h9L19 18H5ZM5.5 18l-1 3.5m14-3.5l1 3.5");
}

.s0sd-ceke {
  d: path("M9 7c1-1.25 2 1.25 3 0s2 1.25 3 0m-6.25 3.5h6.5M8.5 14c1.25-1.25 2.5 1.25 3.75 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k4jdfj__x"/><path class="s0sd-ceke"/></g>`,
		"fallback": "uix-sharp:sandwich-board",
	});
}

export default Component;
