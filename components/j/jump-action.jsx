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
		"content": `<style>.y48_zkbcr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.061 4.061l4.525 4.525A.828.828 0 0 1 17 10h-.5a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 15.5v-4A1.5 1.5 0 0 0 7.5 10H7a.828.828 0 0 1-.586-1.414l4.525-4.525a1.5 1.5 0 0 1 2.122 0M3.5 21h17");
}
</style><path class="y48_zkbcr"/>`,
		"fallback": "uix:jump-action",
	});
}

export default Component;
