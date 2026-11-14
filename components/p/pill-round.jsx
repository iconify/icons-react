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

.q-qump_tv {
  d: path("M3 10a9 4 0 1 0 18 0a9 4 0 1 0-18 0");
}

.qjg_o9u4m {
  d: path("M3 10v4a9 4 0 0 0 18 0v-4");
}
</style><g class="hntgybcog"><path class="q-qump_tv"/><path class="qjg_o9u4m"/></g>`,
		"fallback": "uix:pill-round",
	});
}

export default Component;
