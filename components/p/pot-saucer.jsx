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
		"content": `<style>.eyirp5bnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5h16v6c0 3.5-3.5 5.5-8 5.5s-8-2-8-5.5ZM2.5 7.5H4m16 0h1.5M3 19.25l1.75 2.25h14.5L21 19.25");
}
</style><path class="eyirp5bnx"/>`,
		"fallback": "uix:pot-saucer",
	});
}

export default Component;
