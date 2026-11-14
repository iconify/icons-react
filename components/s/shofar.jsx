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
		"content": `<style>.b7-xbqjtq {
  d: path("M11.5 5c0 6-1.5 11-7.5 13.5l.5 2.25C14 19.5 20.5 13 20.5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xxub2slnt {
  d: path("M11.5 5a4.5 1.75 0 1 0 9 0a4.5 1.75 0 1 0-9 0Z");
}
</style><g class="ulnmmdpxh"><path class="b7-xbqjtq"/><path class="xxub2slnt"/></g>`,
		"fallback": "uix-sharp:shofar",
	});
}

export default Component;
