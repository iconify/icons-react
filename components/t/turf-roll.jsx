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

.m75nhibta {
  d: path("M7 6.5h10.5a4 6.5 0 0 1 0 13H7");
}

.owi6a9bzg {
  d: path("M7 16a2 3 0 1 1 2-3m2-6.5l-.75-2.75M14.5 6.5l-.75-2.75M18 6.5L17.5 4");
}

.rhiqs4b5r {
  d: path("M3 13a4 6.5 0 1 0 8 0a4 6.5 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="rhiqs4b5r"/><path class="m75nhibta"/><path class="owi6a9bzg"/></g>`,
		"fallback": "uix:turf-roll",
	});
}

export default Component;
