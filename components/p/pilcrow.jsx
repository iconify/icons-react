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
		"content": `<style>.j-101yb1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 3.75H13a4.25 4.25 0 0 1 0 8.5h-1.5Zm0 0v16.5M6.75 3.75v16.5m0-16.5h4.75");
}
</style><path class="j-101yb1g"/>`,
		"fallback": "iconoven:pilcrow",
	});
}

export default Component;
