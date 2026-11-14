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
		"content": `<style>.j18hapnui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.875 2.5h2.25A4.375 4.375 0 0 1 17.5 6.875v.75A4.375 4.375 0 0 1 13.125 12h-2.25A4.375 4.375 0 0 1 6.5 7.625v-.75A4.375 4.375 0 0 1 10.875 2.5M12 12.5V21m-4 0h8M10 5.25l4 4m0-4l-4 4");
}
</style><path class="j18hapnui"/>`,
		"fallback": "uix:lane-closed",
	});
}

export default Component;
