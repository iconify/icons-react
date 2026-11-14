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
		"content": `<style>.pgf4zvsff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 16.5h15.5a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-1.5a1.75 1.75 0 0 1 1.75-1.75M3.5 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-.75 8c0-2.25 1.25-3.5 2.75-3.5s2.75 1.25 2.75 3.5ZM10 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-.75 8c0-2.25 1.25-3.5 2.75-3.5s2.75 1.25 2.75 3.5Zm7.25-8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-.75 8c0-2.25 1.25-3.5 2.75-3.5s2.75 1.25 2.75 3.5Z");
}
</style><path class="pgf4zvsff"/>`,
		"fallback": "uix:shortlist",
	});
}

export default Component;
