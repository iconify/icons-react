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
		"content": `<style>.ok9ioqb8x {
  d: path("M4 17h16");
}

.pl-e7wb3s {
  d: path("M6 14v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uy5j3ks5u {
  d: path("M6 4v10h12v-3");
}

.zuzyjabxh {
  d: path("M18 14v3");
}
</style><g class="s0phu2bbs"><path class="uy5j3ks5u"/><path class="ok9ioqb8x"/><path class="pl-e7wb3s"/><path class="zuzyjabxh"/></g>`,
		"fallback": "iconmind:skating-outline-bold",
	});
}

export default Component;
