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
		"content": `<style>.wjl-hbc8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4h17v3.5l1 12h-8L12 12l-1.5 7.5h-8l1-12Zm0 3.5h17");
}
</style><path class="wjl-hbc8q"/>`,
		"fallback": "uix:muay-thai-shorts",
	});
}

export default Component;
