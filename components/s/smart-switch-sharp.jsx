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
		"content": `<style>.tdcx0rb0t {
  d: path("M3.25 8.25h12.5v13H3.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xbbzq2yxs {
  d: path("M7 11.25h5v7H7zm0 3.5h5m3.58-8.97l2.246.394l.394 2.246M16.1 2.83a6.25 6.25 0 0 1 5.07 5.07");
}
</style><g class="x2cwu0gfd"><path class="tdcx0rb0t"/><path class="xbbzq2yxs"/></g>`,
		"fallback": "iconoven:smart-switch-sharp",
	});
}

export default Component;
