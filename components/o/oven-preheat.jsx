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
		"content": `<style>.dc7lr8boj {
  d: path("M7 13h10v5.5H7Zm1-6Q6.5 5.875 8 4.75T8 2.5M12 7q-1.5-1.125 0-2.25t0-2.25M16 7q-1.5-1.125 0-2.25t0-2.25");
}

.hwqs9ib3b {
  d: path("M3.5 10h17v11.5h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hwqs9ib3b"/><path class="dc7lr8boj"/></g>`,
		"fallback": "uix-sharp:oven-preheat",
	});
}

export default Component;
