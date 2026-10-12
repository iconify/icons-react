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
		"content": `<style>.k_a49ybwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 3.5c-.6.75.6 1.5 0 2.25m5.5-2.25c-.6.75.6 1.5 0 2.25M12 5c-.6.75.6 1.5 0 2.25M5.25 10.5h13.5a6.75 6.75 0 0 1-13.5 0M7 12.75h10M5.25 10.5c-3 0-3 3.5 0 3.5m13.5-3.5c3 0 3 3.5 0 3.5");
}
</style><path class="k_a49ybwo"/>`,
		"fallback": "iconoven:karahi",
	});
}

export default Component;
