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
		"content": `<style>.h4_-gvbqo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 5.5zA5.5 5.5 0 0 1 20 11v5a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 9 16v-5a5.5 5.5 0 0 1 5.5-5.5m0 0V11M9 11h11M3 3l2 2M2.5 8.5H5m3.5-6v1");
}
</style><path class="h4_-gvbqo"/>`,
		"fallback": "uix:mouse-click-left",
	});
}

export default Component;
