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
		"content": `<style>.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wa1c01bfg {
  d: path("m4 20 7 -7h3l7 7Z");
}

.zgtvbjo0h {
  d: path("m9 10 3 -3 3 3");
}
</style><g class="s0phu2bbs"><path class="wa1c01bfg"/><path class="zgtvbjo0h"/></g>`,
		"fallback": "iconmind:volcano-peak-outline-bold",
	});
}

export default Component;
