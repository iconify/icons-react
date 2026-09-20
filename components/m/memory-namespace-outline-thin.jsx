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

.tcl3i7btq {
  d: path("M14.5 5H17v6h-2.5");
}

.v7f4yac2c {
  d: path("M9.5 5H7v6h2.5");
}
</style><g class="hntgybcog"><path class="n0n63pb2v"/><path class="v7f4yac2c"/><path class="tcl3i7btq"/></g>`,
		"fallback": "iconmind:memory-namespace-outline-thin",
	});
}

export default Component;
