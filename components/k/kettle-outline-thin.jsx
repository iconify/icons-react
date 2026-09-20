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
		"content": `<style>.g-qvc03sc {
  d: path("M6 10h10v8a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iv9vhg42o {
  d: path("M7 10c0 -5 8 -5 8 0");
}

.q3ca84baq {
  d: path("m16 11 4 -4");
}
</style><g class="hntgybcog"><path class="g-qvc03sc"/><path class="q3ca84baq"/><path class="iv9vhg42o"/></g>`,
		"fallback": "iconmind:kettle-outline-thin",
	});
}

export default Component;
