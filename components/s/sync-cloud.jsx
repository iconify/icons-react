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

.nhlftfbni {
  d: path("m9 12.5l1.5-1.5l1.5 1.5m2.5-1.5v5M13 14.5l1.5 1.5l1.5-1.5");
}

.u7nav3abk {
  d: path("M7 18.5a4 4 0 0 1 0-8a5.5 5.5 0 0 1 11 1a3.5 3.5 0 0 1-1 7Zm3.5-2.5v-5");
}
</style><g class="hntgybcog"><path class="u7nav3abk"/><path class="nhlftfbni"/></g>`,
		"fallback": "uix:sync-cloud",
	});
}

export default Component;
