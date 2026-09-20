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
		"content": `<style>.fm9ovcbvk {
  d: path("M4 4h6c0 -1.5 4 -1.5 4 0h6v6c1.5 0 1.5 4 0 4v6H4v-6c1.5 0 1.5 -4 0 -4Z");
}

.htuj7h56e {
  fill: currentColor;
  d: path("M4 4h6c0 -1.5 4 -1.5 4 0h6v6c1.5 0 1.5 4 0 4v6H4v-6c1.5 0 1.5 -4 0 -4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="htuj7h56e"/><path class="fm9ovcbvk"/></g>`,
		"fallback": "iconmind:puzzle-piece-duotone-bold",
	});
}

export default Component;
