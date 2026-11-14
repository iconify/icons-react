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
		"content": `<style>.l0tbvsbsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5h19l-2.5 7H5ZM15 5H9a2 2 0 1 0-3 1.75A2 2 0 1 0 9 8.5h6a2 2 0 1 0 3-1.75A2 2 0 1 0 15 5");
}
</style><path class="l0tbvsbsj"/>`,
		"fallback": "uix:pet-bowl",
	});
}

export default Component;
