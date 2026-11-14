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
		"content": `<style>.mob1xmb3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.875 2.5h4.25A1.375 1.375 0 0 1 15.5 3.875a1.375 1.375 0 0 1-1.375 1.375h-4.25A1.375 1.375 0 0 1 8.5 3.875A1.375 1.375 0 0 1 9.875 2.5m0 5.5h4.25A1.375 1.375 0 0 1 15.5 9.375a1.375 1.375 0 0 1-1.375 1.375h-4.25A1.375 1.375 0 0 1 8.5 9.375A1.375 1.375 0 0 1 9.875 8m0 5.5h4.25a1.375 1.375 0 0 1 1.375 1.375a1.375 1.375 0 0 1-1.375 1.375h-4.25A1.375 1.375 0 0 1 8.5 14.875A1.375 1.375 0 0 1 9.875 13.5m0 5.5h4.25a1.375 1.375 0 0 1 1.375 1.375a1.375 1.375 0 0 1-1.375 1.375h-4.25A1.375 1.375 0 0 1 8.5 20.375A1.375 1.375 0 0 1 9.875 19");
}
</style><path class="mob1xmb3s"/>`,
		"fallback": "uix:spine",
	});
}

export default Component;
