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
		"content": `<style>.l18c8xbrk {
  d: path("M8.69 4.37a4 4 0 1 1 -3.38 0");
}

.m4mj7rdxr {
  d: path("m13 12 3.5 3.5L13 19");
}

.o96t7tbzh {
  d: path("M18.5 19h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="l18c8xbrk"/><path class="m4mj7rdxr"/><path class="o96t7tbzh"/></g>`,
		"fallback": "iconmind:shell-agent-outline-bold",
	});
}

export default Component;
