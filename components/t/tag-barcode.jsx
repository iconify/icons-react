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

.ml4fyvb8f {
  d: path("M6 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6-4v8m3-8v8m3-8v8");
}

.ztlwh8j1u {
  d: path("m3.04 11.1l3.45-5.75a1.75 1.75 0 0 1 1.501-.85H19.75a1.75 1.75 0 0 1 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H7.991a1.75 1.75 0 0 1-1.501-.85L3.04 12.9a1.75 1.75 0 0 1 0-1.8");
}
</style><g class="hntgybcog"><path class="ztlwh8j1u"/><path class="ml4fyvb8f"/></g>`,
		"fallback": "uix:tag-barcode",
	});
}

export default Component;
