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
		"content": `<style>.bm38u4b9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14.5V6a3 3 0 0 1 6 0v8.5a4 4 0 1 1-6 0Zm3-1v3.75M18 14.5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="bm38u4b9i"/>`,
		"fallback": "uix-sharp:temperature-low",
	});
}

export default Component;
