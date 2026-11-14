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
		"content": `<style>.alzlfxbbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8v12.5M21 8v12.5M3 11h18M3 17h18M7.5 11v6m4.5-6v6m4.5-6v6m-4-14.5A3 3 0 1 0 15 7a2.25 2.25 0 0 1-2.5-4.5");
}
</style><path class="alzlfxbbd"/>`,
		"fallback": "uix:safe-sleep",
	});
}

export default Component;
