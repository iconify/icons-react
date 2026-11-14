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
		"content": `<style>.j789nhb0x {
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 2v8m-6.5.5l2-6h9l2 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vssnpkb6r {
  d: path("m8.5 21.5l1.5-7h4l1.5 7m-6-9.75h5");
}
</style><g class="ulnmmdpxh"><path class="j789nhb0x"/><path class="vssnpkb6r"/></g>`,
		"fallback": "uix-sharp:skeleton-full",
	});
}

export default Component;
