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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pilge_bsd {
  d: path("M2.5 16.5V8H10v8.5m0-5.5h4l2-3h2l3 4v4.5H10");
}

.qg96oqbkr {
  d: path("M4 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8.25 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="pilge_bsd"/><path class="qg96oqbkr"/></g>`,
		"fallback": "uix:semi-truck",
	});
}

export default Component;
