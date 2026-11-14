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
		"content": `<style>.ao1oebc5q {
  d: path("M8.5 15v6l1.75-1.25L12 21l1.75-1.25L15.5 21v-6M12 6l.75 2.25l2.5.25L13.5 10l.5 2.25L12 11l-2 1.25l.5-2.25l-1.75-1.5l2.5-.25Z");
}

.mxzl1tbmo {
  d: path("M5.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mxzl1tbmo"/><path class="ao1oebc5q"/></g>`,
		"fallback": "uix-sharp:reputation",
	});
}

export default Component;
