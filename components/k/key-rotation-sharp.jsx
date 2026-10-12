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
		"content": `<style>.ar75qkbfc {
  d: path("M11.5 12h5m-2 0v2M4.42 7.63a8.75 8.75 0 0 1 15.16 0m0-2.75v2.75h-2.75m2.75 8.74a8.75 8.75 0 0 1-15.16 0m0 2.75v-2.75h2.75");
}

.n9w-9db8r {
  cx: 8.5px;
  cy: 12px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="n9w-9db8r"/><path class="ar75qkbfc"/></g>`,
		"fallback": "iconoven:key-rotation-sharp",
	});
}

export default Component;
