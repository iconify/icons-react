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
		"content": `<style>.e4h91tb_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19v3.5h-19ZM4 14.5v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5m-10 3.25h4M8.5 2.5h7A1.5 1.5 0 0 1 17 4v1.5A1.5 1.5 0 0 1 15.5 7h-4L10 8.25V7H8.5A1.5 1.5 0 0 1 7 5.5V4a1.5 1.5 0 0 1 1.5-1.5Z");
}
</style><path class="e4h91tb_e"/>`,
		"fallback": "uix-sharp:message-archive",
	});
}

export default Component;
