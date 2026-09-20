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

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.pggkrac7x {
  d: path("m7 6 3 3 3 -3 3 3");
}
</style><g class="hntgybcog"><path class="n0n63pb2v"/><path class="pggkrac7x"/></g>`,
		"fallback": "iconmind:memory-decay-outline-thin",
	});
}

export default Component;
