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
		"content": `<style>.hj3ng_3ym {
  d: path("M7.25 11.5Q8 8.75 11 8.25m-4 12.5h10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wphw1utge {
  d: path("M3 13c0-5 4.5-8.5 10-8.5S21 8 21 12s-4 5.75-9 5.75c-5.5 0-9-1.25-9-4.75Z");
}
</style><g class="ulnmmdpxh"><path class="wphw1utge"/><path class="hj3ng_3ym"/></g>`,
		"fallback": "uix-sharp:pebble",
	});
}

export default Component;
