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
		"content": `<style>.atq4odb0h {
  d: path("M11 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.d3kpl_b4o {
  d: path("M5 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fqjbkn2kp {
  d: path("M8 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="vyks9vbfn"/><path class="d3kpl_b4o"/><path class="atq4odb0h"/><path class="fqjbkn2kp"/></g>`,
		"fallback": "iconmind:palette-outline-thin",
	});
}

export default Component;
