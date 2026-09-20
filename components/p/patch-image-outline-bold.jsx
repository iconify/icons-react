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
		"content": `<style>.h1cr44bva {
  d: path("M3 12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ts5ij9bsc {
  d: path("M12 13v6");
}

.v1-fmxxhj {
  d: path("M3 4.5A2.5 2.5 0 0 1 5.5 2h13A2.5 2.5 0 0 1 21 4.5 2.5 2.5 0 0 1 18.5 7h-13A2.5 2.5 0 0 1 3 4.5");
}

.zm2dyvb-o {
  d: path("M9 16h6");
}
</style><g class="s0phu2bbs"><path class="v1-fmxxhj"/><path class="h1cr44bva"/><path class="ts5ij9bsc"/><path class="zm2dyvb-o"/></g>`,
		"fallback": "iconmind:patch-image-outline-bold",
	});
}

export default Component;
