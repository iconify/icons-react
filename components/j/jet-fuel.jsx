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
		"content": `<style>.oii1axwoo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h2L8 7h10.5a2.5 2.5 0 0 1 0 5H6c-1.5 0-2.5-1-2.75-2.5Zm10 9.5l-3 4.5H7m11-1.75c-1 1.25-2.75 3-2.75 4.25a2.75 2.75 0 0 0 5.5 0c0-1.25-1.75-3-2.75-4.25");
}
</style><path class="oii1axwoo"/>`,
		"fallback": "uix:jet-fuel",
	});
}

export default Component;
