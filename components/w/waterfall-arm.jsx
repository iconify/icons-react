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
		"content": `<style>.jtqshhbdo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 3zA1.25 1.25 0 0 1 5 4.25v7.5A1.25 1.25 0 0 1 3.75 13a1.25 1.25 0 0 1-1.25-1.25v-7.5A1.25 1.25 0 0 1 3.75 3M5 5.5l16 7M7.75 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M12 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m4.25 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M3.75 13v8.5");
}
</style><path class="jtqshhbdo"/>`,
		"fallback": "uix:waterfall-arm",
	});
}

export default Component;
