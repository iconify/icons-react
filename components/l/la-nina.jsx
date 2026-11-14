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
		"content": `<style>.bi12wbokh {
  d: path("M3 9.5q2.25-2.5 4.5 0t4.5 0t4.5 0t4.5 0M3 14q2.25-2.5 4.5 0t4.5 0m6.5 1.5v6M16 17l5 3m-5 0l5-3");
}

.jof161qqk {
  d: path("M3 5q2.25-2.5 4.5 0T12 5t4.5 0T21 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jof161qqk"/><path class="bi12wbokh"/></g>`,
		"fallback": "uix-sharp:la-nina",
	});
}

export default Component;
