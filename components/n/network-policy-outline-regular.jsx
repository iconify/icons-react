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
		"content": `<style>.a97qfmbix {
  d: path("M14 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.c4o3x9bhp {
  d: path("M8 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.f2vh026ub {
  d: path("M10 9h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oyxdwu0be {
  d: path("M15 3h5v8l-8 8 -8 -8V3h5Z");
}

.uadefenvd {
  d: path("M7 22h10");
}
</style><g class="nrj6p8qat"><path class="oyxdwu0be"/><path class="c4o3x9bhp"/><path class="a97qfmbix"/><path class="f2vh026ub"/><path class="uadefenvd"/></g>`,
		"fallback": "iconmind:network-policy-outline-regular",
	});
}

export default Component;
