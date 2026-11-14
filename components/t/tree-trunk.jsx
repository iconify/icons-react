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
		"content": `<style>.i19gzxb0d {
  d: path("M5 7v10.5l-2 3h18l-2-3V7M9 13v4m6-2.5v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdw9ar34t {
  d: path("M5 7a7 3 0 1 0 14 0A7 3 0 1 0 5 7Z");
}
</style><g class="ulnmmdpxh"><path class="zdw9ar34t"/><path class="i19gzxb0d"/></g>`,
		"fallback": "uix-sharp:tree-trunk",
	});
}

export default Component;
