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
		"content": `<style>.vvzb-bbtg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 9h7.5a5.75 5.75 0 0 1 5.75 5.75a5.75 5.75 0 0 1-5.75 5.75h-7.5a5.75 5.75 0 0 1-5.75-5.75A5.75 5.75 0 0 1 8.25 9M6.5 9a5.5 5.5 0 0 1 11 0m-11 0v11.5M17.5 9v11.5");
}
</style><path class="vvzb-bbtg"/>`,
		"fallback": "uix:sports-bag",
	});
}

export default Component;
