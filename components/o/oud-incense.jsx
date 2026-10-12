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
		"content": `<style>.c2pujlzdo {
  d: path("M10 8.5c-1.25-1.25 1.25-2 0-3.25s1.25-2 0-2.5m4 5.75c-1.25-1.25 1.25-2 0-3.25M5.5 10.5h13q1 0 .52.88l-1.79 3.24q-.48.88-1.48.88h-7.5q-1 0-1.48-.88l-1.79-3.24q-.48-.88.52-.88m1 2.5h11");
}

.h-jmzrbgs {
  d: path("M11 15.5h2q1 0 1.4.92l1.7 3.91q.4.92-.6.92h-7q-1 0-.6-.92l1.7-3.91q.4-.92 1.4-.92");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c2pujlzdo"/><path class="h-jmzrbgs"/></g>`,
		"fallback": "iconoven:oud-incense",
	});
}

export default Component;
