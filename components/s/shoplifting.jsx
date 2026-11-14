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

.moxk4pbrr {
  d: path("M16 15.5h4a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5m-1.5 2.25h7M18 15.5v2.25");
}

.n3a6_rbge {
  fill: currentColor;
  d: path("M2.5 6C2.5 4.5 4 3.5 6 3.5h12c2 0 3.5 1 3.5 2.5v1.5c0 2.5-2 4-4.5 4s-3.5-2-5-2s-2.5 2-5 2s-4.5-1.5-4.5-4Zm2.25 1.25a2.25 1.5 0 0 0 4.5 0a2.25 1.5 0 0 0-4.5 0m10 0a2.25 1.5 0 0 0 4.5 0a2.25 1.5 0 0 0-4.5 0");
}
</style><g class="hntgybcog"><path class="n3a6_rbge"/><path class="moxk4pbrr"/></g>`,
		"fallback": "uix:shoplifting",
	});
}

export default Component;
