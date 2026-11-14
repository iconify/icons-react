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
		"content": `<style>.n3rw7h9vn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7.5h14M14.5 4L18 7.5L14.5 11m-2.3 5.5H6M9.5 13L6 16.5L9.5 20m5.5-2.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="n3rw7h9vn"/>`,
		"fallback": "uix-sharp:remit-rate-lock",
	});
}

export default Component;
