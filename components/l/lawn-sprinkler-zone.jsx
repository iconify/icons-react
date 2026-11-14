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
		"content": `<style>.aw9s4h4kk {
  d: path("M11.5 10.5h1A1.5 1.5 0 0 1 14 12a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 10 12a1.5 1.5 0 0 1 1.5-1.5m.5 3v7M6.75 9a6 6 0 0 1 10.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t0qh-bbki {
  d: path("M4.75 6a9.5 9.5 0 0 1 14.5 0M2.5 18.5a9.5 3 0 1 0 19 0a9.5 3 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="aw9s4h4kk"/><path class="t0qh-bbki"/></g>`,
		"fallback": "uix:lawn-sprinkler-zone",
	});
}

export default Component;
