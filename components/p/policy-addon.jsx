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
		"content": `<style>.fqqbicbmi {
  d: path("M13.778 20.5H5v-18h8.5L19 8v4.422");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tpcgjfolm {
  d: path("M13.5 2.5V8H19M8.5 12h7m-7 4h3m6.5-1v6m-3-3h6");
}
</style><g class="hntgybcog"><path class="fqqbicbmi"/><path class="tpcgjfolm"/></g>`,
		"fallback": "uix:policy-addon",
	});
}

export default Component;
