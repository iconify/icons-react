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
		"content": `<style>.bwz-puxhk {
  d: path("m9 16.5l2.25-3.75M10 13l1.25-.25l.25 1.25m1.25-1.25L15 16.5m.25-1.25L15 16.5l-1.25-.25m.5 1.25h-4.5m1-1l-1 1l1 1");
}

.e-eit08yd {
  d: path("M4 7h16l-1 14H5Zm4.5 0a3.5 3.5 0 0 1 7 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e-eit08yd"/><path class="bwz-puxhk"/></g>`,
		"fallback": "uix-sharp:recycle-bag",
	});
}

export default Component;
