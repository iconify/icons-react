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
		"content": `<style>.bod4n0b3z {
  d: path("M2 18h20");
}

.c4e1y7wvc {
  d: path("M4 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.h36909btm {
  d: path("M16 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xedmbxbzm {
  d: path("M10 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ydpucsi6v {
  d: path("M2 18a10 10 0 0 1 20 0");
}
</style><g class="s0phu2bbs"><path class="ydpucsi6v"/><path class="bod4n0b3z"/><path class="c4e1y7wvc"/><path class="xedmbxbzm"/><path class="h36909btm"/></g>`,
		"fallback": "iconmind:orchestra-outline-bold",
	});
}

export default Component;
