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

.n4avueb2x {
  d: path("M6 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.t407nkbfi {
  d: path("m9 7 3 -3 3 3");
}

.tum88bbiw {
  d: path("M12 12V4");
}

.u-hehrbeq {
  d: path("M10 17h4");
}

.xxhou8bla {
  d: path("M14 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="n4avueb2x"/><path class="xxhou8bla"/><path class="u-hehrbeq"/><path class="tum88bbiw"/><path class="t407nkbfi"/></g>`,
		"fallback": "iconmind:strength-outline-thin",
	});
}

export default Component;
