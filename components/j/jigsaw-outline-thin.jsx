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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t9edcbc3d {
  d: path("M17 3h4v18h-4v-7c1.5 0 1.5 -4 0 -4Z");
}

.uq717lsoo {
  d: path("M3 3h7c0 -1.5 4 -1.5 4 0v7c1.5 0 1.5 4 0 4v7H3Z");
}
</style><g class="hntgybcog"><path class="uq717lsoo"/><path class="t9edcbc3d"/></g>`,
		"fallback": "iconmind:jigsaw-outline-thin",
	});
}

export default Component;
