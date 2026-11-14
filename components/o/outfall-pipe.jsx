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
		"content": `<style>.zes25ebhk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 4.5h8V3h2v8h-2V9.5H2m10-2.25c4 0 6 2.75 6 7.75M2 19q2.5-1.5 5 0t5 0t5 0t5 0");
}
</style><path class="zes25ebhk"/>`,
		"fallback": "uix-sharp:outfall-pipe",
	});
}

export default Component;
