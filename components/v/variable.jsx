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
		"content": `<style>.d5k_0pb5y {
  d: path("M12.5 6H18a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 18 18h-5.5A3.5 3.5 0 0 1 9 14.5v-5A3.5 3.5 0 0 1 12.5 6m-10 6H9");
}

.f48e5dbbd {
  d: path("M12.5 15c2 0 3-6 5-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l-vg4sbvj {
  d: path("m6 9l3 3l-3 3m6.5-6c2 0 3 6 5 6");
}
</style><g class="hntgybcog"><path class="d5k_0pb5y"/><path class="l-vg4sbvj"/><path class="f48e5dbbd"/></g>`,
		"fallback": "uix:variable",
	});
}

export default Component;
