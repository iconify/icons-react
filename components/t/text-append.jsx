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
		"content": `<style>.vmn94149x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 21H21M15 15H21M3 9H21M3 3H21M8.6 21L11 18.75L8.6 16.5M11 18.75H4.6C3.7164 18.75 3 18.08 3 17.25V15");
}
</style><path class="vmn94149x"/>`,
		"fallback": "keyline-icons:text-append",
	});
}

export default Component;
