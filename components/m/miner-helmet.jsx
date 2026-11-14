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
		"content": `<style>.fv5pcnpmp {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i5088ubnz {
  d: path("M4 17v-2a8 8 0 0 1 16 0v2M2.5 17h19");
}
</style><g class="hntgybcog"><path class="i5088ubnz"/><path class="fv5pcnpmp"/></g>`,
		"fallback": "uix:miner-helmet",
	});
}

export default Component;
