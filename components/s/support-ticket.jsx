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
		"content": `<style>.j77te7bsx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5h10a1.5 1.5 0 0 0 3 0h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a1.5 1.5 0 0 0-3 0h-10a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2M16 9v6M6 10h5.5M6 14h4");
}
</style><path class="j77te7bsx"/>`,
		"fallback": "uix:support-ticket",
	});
}

export default Component;
