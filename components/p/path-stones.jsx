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
		"content": `<style>.m0v11mb9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 18.5a4.5 2.75 0 1 0 9 0a4.5 2.75 0 1 0-9 0M12.5 12a3.75 2.25 0 1 0 7.5 0a3.75 2.25 0 1 0-7.5 0M7.25 5.5a3 2 0 1 0 6 0a3 2 0 1 0-6 0");
}
</style><path class="m0v11mb9e"/>`,
		"fallback": "uix:path-stones",
	});
}

export default Component;
