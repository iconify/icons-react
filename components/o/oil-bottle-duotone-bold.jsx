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
		"content": `<style>.cqen3ttkk {
  d: path("M8 21v-8c0 -2 2 -3 2 -4V6h4v3c0 1 2 2 2 4v8Z");
}

.j3ks3bbge {
  fill: currentColor;
  d: path("M8 21v-8c0 -2 2 -3 2 -4V6h4v3c0 1 2 2 2 4v8Z");
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

.u-a-7fbnu {
  d: path("M10 6V3h4v3");
}

.zm2dyvb-o {
  d: path("M9 16h6");
}
</style><g class="s0phu2bbs"><path class="j3ks3bbge"/><path class="cqen3ttkk"/><path class="u-a-7fbnu"/><path class="zm2dyvb-o"/></g>`,
		"fallback": "iconmind:oil-bottle-duotone-bold",
	});
}

export default Component;
