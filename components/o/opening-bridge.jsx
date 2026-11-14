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
		"content": `<style>.nt6kbcb3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5H8l2.25-8m11.25 8H16l-2.25-8M8 13.5v6m8-6v6m-13.5 0h19");
}
</style><path class="nt6kbcb3l"/>`,
		"fallback": "uix:opening-bridge",
	});
}

export default Component;
