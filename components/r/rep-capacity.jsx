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
		"content": `<style>.dx2uvpb7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-2.75 7.5c0-1.25 2.5-2 5.5-2s5.5.75 5.5 2m-12 2.75h13a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 3H14");
}
</style><path class="dx2uvpb7q"/>`,
		"fallback": "uix:rep-capacity",
	});
}

export default Component;
