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
		"content": `<style>.bt8gcrote {
  fill: currentColor;
  d: path("M10.5 8.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-3 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nes06lb_l {
  d: path("M7.5 3C5.5 3 5 4 5 6v3.5C5 11 4.25 12 2.5 12C4.25 12 5 13 5 14.5V18c0 2 .5 3 2.5 3m9-18c2 0 2.5 1 2.5 3v3.5c0 1.5.75 2.5 2.5 2.5c-1.75 0-2.5 1-2.5 2.5V18c0 2-.5 3-2.5 3");
}
</style><g class="hntgybcog"><path class="nes06lb_l"/><path class="bt8gcrote"/></g>`,
		"fallback": "uix:set-data",
	});
}

export default Component;
