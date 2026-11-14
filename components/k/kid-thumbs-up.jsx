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
		"content": `<style>.j2235o6nu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 11h2A1.75 1.75 0 0 1 8 12.75v7a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75v-7A1.75 1.75 0 0 1 4.25 11M8 11h2.5L12 5c.5-2.25 4-2.25 4 .5v5h3a2.5 2.5 0 0 1 2.5 2.5l-1.25 6.25a2.5 2.5 0 0 1-2.5 2.25H8Zm5 5.5h7.75");
}
</style><path class="j2235o6nu"/>`,
		"fallback": "uix:kid-thumbs-up",
	});
}

export default Component;
