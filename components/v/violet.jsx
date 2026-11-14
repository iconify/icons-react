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
		"content": `<style>.ze08r7b5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.25a3.75 3.75 0 1 1 2.75 2a3.75 3.75 0 1 1-1 3.5a3.75 3.75 0 1 1-3.5 0a3.75 3.75 0 1 1-1-3.5a3.75 3.75 0 1 1 2.75-2m0 3h.01");
}
</style><path class="ze08r7b5q"/>`,
		"fallback": "uix:violet",
	});
}

export default Component;
