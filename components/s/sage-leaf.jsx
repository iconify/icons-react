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
		"content": `<style>.m7cp953em {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 19C4 10 10 4 20 4c0 10-6 16-15 15m-2 2L15.5 8.5m-5 5v-4m0 4h4");
}
</style><path class="m7cp953em"/>`,
		"fallback": "uix:sage-leaf",
	});
}

export default Component;
