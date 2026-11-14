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
		"content": `<style>.hjfysco-d {
  d: path("M3.5 13.75a2.5 4.5 0 1 0 5 0a2.5 4.5 0 1 0-5 0m6.5-4.5v-3.5h2.75v3.5m2.75 0v-3.5h2.75v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.io1iayq6m {
  d: path("M6 9.25h12a2.5 4.5 0 0 1 0 9H6");
}
</style><g class="hntgybcog"><path class="io1iayq6m"/><path class="hjfysco-d"/></g>`,
		"fallback": "uix:log-press",
	});
}

export default Component;
