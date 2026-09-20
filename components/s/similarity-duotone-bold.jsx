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
		"content": `<style>.j0fn7xluk {
  fill: currentColor;
  d: path("m9 5 5 5 -5 5 -5 -5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.j1y852r1k {
  d: path("m9 5 5 5 -5 5 -5 -5Z");
}

.jbwvw6voa {
  d: path("m15 9 5 5 -5 5 -5 -5Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vks53cb_y {
  fill: currentColor;
  d: path("m15 9 5 5 -5 5 -5 -5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="j0fn7xluk"/><path class="vks53cb_y"/><path class="j1y852r1k"/><path class="jbwvw6voa"/></g>`,
		"fallback": "iconmind:similarity-duotone-bold",
	});
}

export default Component;
