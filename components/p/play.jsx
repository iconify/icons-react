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
		"content": `<style>.u8d89-b9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.04 6.586l5.005 3.203a2.625 2.625 0 0 1 0 4.422l-5.005 3.203A2.625 2.625 0 0 1 7 15.203V8.797a2.625 2.625 0 0 1 4.04-2.211");
}
</style><path class="u8d89-b9v"/>`,
		"fallback": "uix:play",
	});
}

export default Component;
