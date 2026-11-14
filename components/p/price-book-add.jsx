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
		"content": `<style>.vi33_ubvx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.5 15.253V4C17 3.5 14 4 12 5.5C10 4 7 3.5 2.5 4v13.5C7 17 10 17.5 12 19a6 6 0 0 1 .324-.228M12 5.5V19m6-4v6m-3-3h6");
}
</style><path class="vi33_ubvx"/>`,
		"fallback": "uix:price-book-add",
	});
}

export default Component;
