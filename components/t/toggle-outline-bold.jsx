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

.unjh48car {
  d: path("M2 12a5 5 0 0 1 5 -5h10a5 5 0 0 1 5 5 5 5 0 0 1 -5 5H7a5 5 0 0 1 -5 -5");
}

.vjdmi0bfh {
  d: path("M14 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="s0phu2bbs"><path class="unjh48car"/><path class="vjdmi0bfh"/></g>`,
		"fallback": "iconmind:toggle-outline-bold",
	});
}

export default Component;
