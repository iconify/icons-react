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
		"content": `<style>.bgip2qess {
  d: path("M6.5 7h8v10.5h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pj7tcibhm {
  d: path("M6.5 17.5H11V11h8.5");
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}
</style><g class="hntgybcog"><path class="qe97cg-lx"/><path class="pj7tcibhm"/><path class="bgip2qess"/></g>`,
		"fallback": "uix:lap-chart",
	});
}

export default Component;
