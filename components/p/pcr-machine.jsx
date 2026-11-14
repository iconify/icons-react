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
		"content": `<style>.wnq4c_b-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18v9.5H3Zm.5-2.25L17.5 4l1 2.25l-14 5.25Zm4 5.5h.01m4.49 0h.01m4.49 0h.01M7.5 18.5h.01m4.49 0h.01m4.49 0h.01");
}
</style><path class="wnq4c_b-w"/>`,
		"fallback": "uix-sharp:pcr-machine",
	});
}

export default Component;
