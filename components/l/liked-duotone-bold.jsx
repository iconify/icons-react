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
		"content": `<style>.e3ilp526s {
  fill: currentColor;
  d: path("M8 12a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z");
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

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.xa771-t-o {
  fill: currentColor;
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xyv52kb5g {
  d: path("M8 12a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z");
}
</style><g class="s0phu2bbs"><path class="xa771-t-o"/><path class="e3ilp526s"/><path class="ugdbidcqi"/><path class="xyv52kb5g"/></g>`,
		"fallback": "iconmind:liked-duotone-bold",
	});
}

export default Component;
