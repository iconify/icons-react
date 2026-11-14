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
		"content": `<style>.e3_wqbb4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v13.5h-19ZM12 16.5v4m-4.5 0h9M6.75 9.75h.01m3.49 0h.01m3.49 0h.01m3.49 0h.01");
}
</style><path class="e3_wqbb4w"/>`,
		"fallback": "uix-sharp:session-code",
	});
}

export default Component;
