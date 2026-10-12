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
		"content": `<style>.yk9_p2aug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 3.75h13.5a1.5 1.5 0 0 1 1.5 1.5v.5a6 6 0 0 1-6 6h-4.5a6 6 0 0 1-6-6v-.5a1.5 1.5 0 0 1 1.5-1.5M9 8h6m-8.25 7.5c1.75 1.25 3.5-1.25 5.25 0s3.5 1.25 5.25 0m-10.5 4c1.75 1.25 3.5-1.25 5.25 0s3.5 1.25 5.25 0");
}
</style><path class="yk9_p2aug"/>`,
		"fallback": "iconoven:smoke-detector",
	});
}

export default Component;
