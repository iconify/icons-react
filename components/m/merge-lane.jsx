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
		"content": `<style>.el0tuubmk {
  d: path("m14.475 4.725l4.8 4.8a3.5 3.5 0 0 1 0 4.95l-4.8 4.8a3.5 3.5 0 0 1-4.95 0l-4.8-4.8a3.5 3.5 0 0 1 0-4.95l4.8-4.8a3.5 3.5 0 0 1 4.95 0M12 17.5v-11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kk5fssb7b {
  d: path("M9.75 8.75L12 6.5l2.25 2.25m-5 6.75q0-2.5 2.75-4");
}
</style><g class="hntgybcog"><path class="el0tuubmk"/><path class="kk5fssb7b"/></g>`,
		"fallback": "uix:merge-lane",
	});
}

export default Component;
