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
		"content": `<style>.vfzew_bfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5.5h.01m3.49 0H21M9 12h.01m3.49 0H21M9 18.5h.01m3.49 0H18");
}
</style><path class="vfzew_bfs"/>`,
		"fallback": "uix:list-nested",
	});
}

export default Component;
