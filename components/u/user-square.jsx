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
		"content": `<style>.jxemsp-ct {
  d: path("M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z8skbacgr {
  d: path("M9 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM6.5 21c0-3.5 2.5-5.5 5.5-5.5s5.5 2 5.5 5.5");
}
</style><g class="ulnmmdpxh"><path class="jxemsp-ct"/><path class="z8skbacgr"/></g>`,
		"fallback": "uix-sharp:user-square",
	});
}

export default Component;
