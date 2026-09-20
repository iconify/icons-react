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
		"content": `<style>.b5ic9acln {
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
}

.dm800-bqq {
  d: path("M14.5 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.khp0b8bxr {
  d: path("M10.5 13h3");
}

.x6mmtxx8d {
  d: path("M7.5 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="b5ic9acln"/><path class="x6mmtxx8d"/><path class="khp0b8bxr"/><path class="dm800-bqq"/></g>`,
		"fallback": "iconmind:late-interaction-outline-thin",
	});
}

export default Component;
