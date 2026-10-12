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
		"content": `<style>.gc-3hgt3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 6.5h10m-10 6h10m-10 6h10M7 4.5v4m0-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0M3 14v6.5m0-2a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="gc-3hgt3y"/>`,
		"fallback": "iconoven:list-letters",
	});
}

export default Component;
