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
		"content": `<style>.b059umbje {
  d: path("M9 9v3h2.5");
}

.g922zfo1b {
  d: path("M18 8v4");
}

.gcy6xobcc {
  d: path("M3 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p4jzd4blg {
  d: path("M17 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="gcy6xobcc"/><path class="b059umbje"/><path class="g922zfo1b"/><path class="p4jzd4blg"/></g>`,
		"fallback": "iconmind:wait-approval-outline-thin",
	});
}

export default Component;
