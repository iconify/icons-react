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
		"content": `<style>.fbn42bcxw {
  d: path("M14 8h8");
}

.jqlnd8iax {
  d: path("M2 20v-7l5 -5 5 5v7Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u1kydjbkc {
  d: path("M14 7a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="jqlnd8iax"/><path class="u1kydjbkc"/><path class="fbn42bcxw"/></g>`,
		"fallback": "iconmind:rent-due-outline-bold",
	});
}

export default Component;
