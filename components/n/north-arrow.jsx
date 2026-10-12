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
		"content": `<style>.ng3_azbep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.36 3.41l4.28 7.93q.36.66-.39.66h-8.5q-.75 0-.39-.66l4.28-7.93q.36-.66.72 0M9 21.25V15l6 6.25V15");
}
</style><path class="ng3_azbep"/>`,
		"fallback": "iconoven:north-arrow",
	});
}

export default Component;
