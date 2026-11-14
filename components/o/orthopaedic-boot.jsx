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
		"content": `<style>.e7vpw7lgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h7v9.5l5 2.5c1.25.6 2 1.5 2 3v.5h-16V5a2 2 0 0 1 2-2m-2 18h16M4.5 9h9");
}
</style><path class="e7vpw7lgj"/>`,
		"fallback": "uix:orthopaedic-boot",
	});
}

export default Component;
