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

.jcj1h_mmu {
  d: path("M4.5 10.26a8 8 0 0 1 15.04 0");
}

.q5_980zya {
  fill: currentColor;
  d: path("M7 13a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.t12-ippwj {
  d: path("M7 13a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.wzdwamk1s {
  d: path("M17 6h3v3");
}
</style><g class="hntgybcog"><path class="q5_980zya"/><path class="t12-ippwj"/><path class="jcj1h_mmu"/><path class="wzdwamk1s"/></g>`,
		"fallback": "iconmind:self-join-duotone-thin",
	});
}

export default Component;
