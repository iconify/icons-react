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
		"content": `<style>.elv-wibvt {
  d: path("M4 18v-4.5a8 8 0 0 1 16 0V18h-3.5v-2.5h-9V18Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uj99f9bmz {
  d: path("M8.75 8.5h6.5A1.75 1.75 0 0 1 17 10.25A1.75 1.75 0 0 1 15.25 12h-6.5A1.75 1.75 0 0 1 7 10.25A1.75 1.75 0 0 1 8.75 8.5");
}
</style><g class="hntgybcog"><path class="elv-wibvt"/><path class="uj99f9bmz"/></g>`,
		"fallback": "uix:ski-helmet",
	});
}

export default Component;
