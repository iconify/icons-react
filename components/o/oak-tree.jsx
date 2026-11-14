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
		"content": `<style>.p339yybbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 15a3 3 0 0 1-2-5.5A3.5 3.5 0 0 1 8.5 5a4 4 0 0 1 7 0A3.5 3.5 0 0 1 20 9.5a3 3 0 0 1-2 5.5Zm4.5 0l-.5 6.5m3.5-6.5l.5 6.5");
}
</style><path class="p339yybbh"/>`,
		"fallback": "uix:oak-tree",
	});
}

export default Component;
