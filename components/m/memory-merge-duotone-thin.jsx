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
		"content": `<style>.av_43ob7n {
  d: path("M7 6h3l3 3h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m8c8atiya {
  fill: currentColor;
  d: path("M4 15v4h16v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.po8gn9rls {
  d: path("M7 12h3l3 -3");
}
</style><g class="hntgybcog"><path class="m8c8atiya"/><path class="n0n63pb2v"/><path class="av_43ob7n"/><path class="po8gn9rls"/></g>`,
		"fallback": "iconmind:memory-merge-duotone-thin",
	});
}

export default Component;
