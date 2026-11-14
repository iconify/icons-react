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
		"content": `<style>.d55witn_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h3L9 6.5c3.5 1.5 4 5 4 8.5v4.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 19.5V15c0-3.5.5-7 4-8.5ZM16 15h5.5l-1 5a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1Z");
}
</style><path class="d55witn_n"/>`,
		"fallback": "uix-sharp:sake-set",
	});
}

export default Component;
