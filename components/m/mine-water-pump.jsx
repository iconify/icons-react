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
		"content": `<style>.s_j76_bjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5za4 4 0 0 1 4 4v4a4 4 0 0 1-4 4a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4m4 4.5H16a2.5 2.5 0 0 1 2.5 2.5m-16 11q2.25-1.25 4.5 0t4.5 0t4.5 0t4.5 0m-2-8.25l2 3a2 2 0 0 1-4 0Z");
}
</style><path class="s_j76_bjs"/>`,
		"fallback": "uix:mine-water-pump",
	});
}

export default Component;
