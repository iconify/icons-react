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
		"content": `<style>.mlpndo9ol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5c3 0 4.5 2.5 5.5 5c1 2 3.5 2 6.5 2a2.75 2.75 0 0 1 0 5.5c-3 0-5.5.5-6.5 2S6 20.5 3 20.5Zm11 2q1.75-1.5 3.5 0t3.5 0m-7 14.25q1.75-1.5 3.5 0t3.5 0");
}
</style><path class="mlpndo9ol"/>`,
		"fallback": "uix:peninsula",
	});
}

export default Component;
