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
		"content": `<style>.n5a06dbvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m5 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-1-5.75l14-5.25m-10.25 9l5.25-14m-2 1L21 12");
}
</style><path class="n5a06dbvt"/>`,
		"fallback": "uix:pruning-shears",
	});
}

export default Component;
