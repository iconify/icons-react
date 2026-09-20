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
		"content": `<style>.c9lz8qbvn {
  fill: currentColor;
  d: path("M9 8h6v6H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.f4yp5uw0u {
  d: path("M14 18.5a2 2 0 0 1 -4 0");
}

.jo_6okb9l {
  d: path("M9 8h6v6H9Z");
}

.k70w93buq {
  d: path("M6 15v-5a6 6 0 0 1 12 0v5l2.5 2.5h-17z");
}

.ro1o_8s6w {
  fill: currentColor;
  d: path("M6 15v-5a6 6 0 0 1 12 0v5l2.5 2.5h-17z");
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
</style><g class="s0phu2bbs"><path class="ro1o_8s6w"/><path class="c9lz8qbvn"/><path class="k70w93buq"/><path class="f4yp5uw0u"/><path class="jo_6okb9l"/></g>`,
		"fallback": "iconmind:restock-alert-duotone-bold",
	});
}

export default Component;
