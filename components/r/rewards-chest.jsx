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
		"content": `<style>.ah0twhbvx {
  d: path("M6.5 10h11a3.5 3.5 0 0 1 3.5 3.5V17a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17v-3.5A3.5 3.5 0 0 1 6.5 10M3 10a9 6 0 0 1 18 0M3 14.5h18");
}

.h49-yibsu {
  d: path("M12 13za1.5 1.5 0 0 1 1.5 1.5V16a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-1.5A1.5 1.5 0 0 1 12 13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ah0twhbvx"/><path class="h49-yibsu"/></g>`,
		"fallback": "uix:rewards-chest",
	});
}

export default Component;
