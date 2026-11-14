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
		"content": `<style>.yeze24fps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5v19m1.25-11h16.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 20.25 13H3.75a1.25 1.25 0 0 1-1.25-1.25a1.25 1.25 0 0 1 1.25-1.25M2.5 18l5-5M6.25 4.5h2A1.75 1.75 0 0 1 10 6.25v2.5a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 4.5 8.75v-2.5A1.75 1.75 0 0 1 6.25 4.5m10.5 1h2a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 15 8.75v-1.5a1.75 1.75 0 0 1 1.75-1.75m-4.25-3v8");
}
</style><path class="yeze24fps"/>`,
		"fallback": "uix:shelf-divider",
	});
}

export default Component;
