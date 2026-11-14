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
		"content": `<style>.kqv-yun-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.472 4h9.056a1.5 1.5 0 0 1 1.093 2.528l-4.529 4.811a1.5 1.5 0 0 1-2.184 0L6.379 6.528A1.5 1.5 0 0 1 7.472 4M12 12.5v8m-4 0h8");
}
</style><path class="kqv-yun-v"/>`,
		"fallback": "uix:martini-glass",
	});
}

export default Component;
