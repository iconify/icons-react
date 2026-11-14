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
		"content": `<style>.y5e630bzc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.726 6.5h8.548a1.75 1.75 0 0 1 1.645 1.152l2.727 7.5a1.75 1.75 0 0 1-1.644 2.348H4.998a1.75 1.75 0 0 1-1.644-2.348l2.727-7.5A1.75 1.75 0 0 1 7.726 6.5m2.524 0l-1.5 11m5-11l1.5 11");
}
</style><path class="y5e630bzc"/>`,
		"fallback": "uix:mower-striping",
	});
}

export default Component;
