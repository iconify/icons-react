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
		"content": `<style>.sxc993bfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14M5 21h14M7 3v3.5l5 5.5l5-5.5V3M7 21v-3.5l5-5.5l5 5.5V21");
}
</style><path class="sxc993bfb"/>`,
		"fallback": "uix-sharp:long-task",
	});
}

export default Component;
