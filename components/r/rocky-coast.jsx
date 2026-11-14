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
		"content": `<style>.jzxu2jn8y {
  d: path("M2.5 21q2.5-2 5 0t5 0t5 0t4 0");
}

.so4razbtb {
  d: path("M2.5 13.5L4 7l3.5-3l2 3.5l2.5-4L15 9l.5 4.5Zm0 4q2.5-2 5 0t5 0t5 0t4 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="so4razbtb"/><path class="jzxu2jn8y"/></g>`,
		"fallback": "uix-sharp:rocky-coast",
	});
}

export default Component;
