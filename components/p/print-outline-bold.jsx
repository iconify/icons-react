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
		"content": `<style>.c7z9o8buo {
  d: path("M7 15h10");
}

.msroekedq {
  d: path("M6 5a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vgyler10s {
  d: path("M2 13a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="msroekedq"/><path class="vgyler10s"/><path class="c7z9o8buo"/></g>`,
		"fallback": "iconmind:print-outline-bold",
	});
}

export default Component;
