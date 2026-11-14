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
		"content": `<style>.qu06o3beq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5v14a3 3 0 0 0 6 0v-14m-7.5 0h9M6 11h6m6 4v6m-3-3h6");
}
</style><path class="qu06o3beq"/>`,
		"fallback": "uix:test-plus",
	});
}

export default Component;
