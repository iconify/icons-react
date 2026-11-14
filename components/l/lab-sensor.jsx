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

.nsflvhe7c {
  d: path("M2.5 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8-15v17H21");
}

.q9zq9hbvl {
  d: path("M5 3za1.5 1.5 0 0 1 1.5 1.5v10A1.5 1.5 0 0 1 5 16a1.5 1.5 0 0 1-1.5-1.5v-10A1.5 1.5 0 0 1 5 3");
}

.xh6-oe9fo {
  d: path("m13 16l2.5-3.5l2 2l3-5.5");
}
</style><g class="hntgybcog"><path class="q9zq9hbvl"/><path class="nsflvhe7c"/><path class="xh6-oe9fo"/></g>`,
		"fallback": "uix:lab-sensor",
	});
}

export default Component;
