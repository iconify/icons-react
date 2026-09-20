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

.pdx7buv0t {
  d: path("M6 21v-4c-2 -2 -3 -5 -3 -8a7 7 0 0 1 14 -1c0 2 2 3 2 4s-1 1 -2 1v3a2 2 0 0 1 -2 2h-3v3");
}

.xq8my1bqk {
  d: path("M7 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="pdx7buv0t"/><path class="xq8my1bqk"/></g>`,
		"fallback": "iconmind:mindfulness-outline-thin",
	});
}

export default Component;
