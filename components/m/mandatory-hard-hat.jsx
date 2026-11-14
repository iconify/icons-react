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
		"content": `<style>.mzgk3pbmh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 14a8 8 0 0 1 16 0M3.875 14h16.25a1.375 1.375 0 0 1 1.375 1.375a1.375 1.375 0 0 1-1.375 1.375H3.875A1.375 1.375 0 0 1 2.5 15.375A1.375 1.375 0 0 1 3.875 14M12 6v4");
}
</style><path class="mzgk3pbmh"/>`,
		"fallback": "uix:mandatory-hard-hat",
	});
}

export default Component;
