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
		"content": `<style>.ilvkvkbha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9.5a8.5 6.5 0 1 0 17 0a8.5 6.5 0 1 0-17 0m.5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-2 2.75h.01M9.5 9.5h7");
}
</style><path class="ilvkvkbha"/>`,
		"fallback": "uix:negative-thought",
	});
}

export default Component;
