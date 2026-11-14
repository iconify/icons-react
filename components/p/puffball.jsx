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
		"content": `<style>.sx1zuwb_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 6.75C6 7.25 3.5 9.75 3.5 13c0 3 2.25 4.75 5 5.25L8 21.5h8l-.5-3.25c2.75-.5 5-2.25 5-5.25c0-3.25-2.5-5.75-6.75-6.25M8.5 18.25h7M12 3.5h.01m2.74-.75h.01");
}
</style><path class="sx1zuwb_d"/>`,
		"fallback": "uix-sharp:puffball",
	});
}

export default Component;
