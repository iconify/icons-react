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
		"content": `<style>.c4e1y7wvc {
  d: path("M4 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.gl9ke1b0t {
  d: path("M2 8h8l2 2 2 -2h8v8h-8l-2 -2 -2 2H2Z");
}

.gob4qybps {
  fill: currentColor;
  d: path("M16 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h36909btm {
  d: path("M16 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hwm293bxf {
  fill: currentColor;
  d: path("M2 8h8l2 2 2 -2h8v8h-8l-2 -2 -2 2H2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ylas06exf {
  fill: currentColor;
  d: path("M4 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="hwm293bxf"/><path class="ylas06exf"/><path class="gob4qybps"/><path class="gl9ke1b0t"/><path class="c4e1y7wvc"/><path class="h36909btm"/></g>`,
		"fallback": "iconmind:safety-goggles-duotone-thin",
	});
}

export default Component;
