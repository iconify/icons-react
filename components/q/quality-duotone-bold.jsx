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
		"content": `<style>.ir3tk2beb {
  d: path("M8 14v7");
}

.m8rhztbam {
  d: path("M16 14v7");
}

.rt_zplbzl {
  d: path("m9 9 2 2 4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tu3bv3eig {
  fill: currentColor;
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yoftwf7ei {
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9");
}
</style><g class="s0phu2bbs"><path class="tu3bv3eig"/><path class="yoftwf7ei"/><path class="rt_zplbzl"/><path class="ir3tk2beb"/><path class="m8rhztbam"/></g>`,
		"fallback": "iconmind:quality-duotone-bold",
	});
}

export default Component;
