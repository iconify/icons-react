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
		"content": `<style>.lkwcv6tig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c0-6.5 3.5-10 7.5-10c3 0 4 2.5 5.5 2.5c3.5 0 6 2.5 6 7.5Zm13.25-12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M11.25 5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><path class="lkwcv6tig"/>`,
		"fallback": "uix:sludge",
	});
}

export default Component;
