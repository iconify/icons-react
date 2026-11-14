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
		"content": `<style>.i-x3qvbop {
  d: path("M3 20.5h18V18h-2v-7.5H5V18H3Zm3-10a6 6 0 0 1 12 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w86z89gvk {
  d: path("M10 20.5v-5a2 2 0 0 1 4 0v5");
}
</style><g class="ulnmmdpxh"><path class="i-x3qvbop"/><path class="w86z89gvk"/></g>`,
		"fallback": "uix-sharp:mausoleum",
	});
}

export default Component;
