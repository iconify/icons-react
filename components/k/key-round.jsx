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
		"content": `<style>.pnexsebdn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 8a5 5 0 1 0 10 0a5 5 0 1 0-10 0m1.5 3.5l-9 9m3-3l2 2M17 7h.01");
}
</style><path class="pnexsebdn"/>`,
		"fallback": "uix:key-round",
	});
}

export default Component;
