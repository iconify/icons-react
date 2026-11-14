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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3gwgj-kc {
  d: path("M4.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.wxc7jd02e {
  d: path("M3 13h18v3.5H3ZM18 2.5V13m0-4H8.5V4.5");
}
</style><g class="ulnmmdpxh"><path class="wxc7jd02e"/><path class="v3gwgj-kc"/></g>`,
		"fallback": "uix-sharp:order-picker-truck",
	});
}

export default Component;
