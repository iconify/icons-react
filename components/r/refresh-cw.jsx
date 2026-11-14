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
		"content": `<style>.a7cqi9b2c {
  d: path("m2.5 15l3-3l3 3");
}

.el34zpb9u {
  d: path("m15.5 9l3 3l3-3m-3.871 6.25A6.5 6.5 0 0 1 5.5 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sxtlwx92v {
  d: path("M6.371 8.75A6.5 6.5 0 0 1 18.5 12");
}
</style><g class="hntgybcog"><path class="sxtlwx92v"/><path class="el34zpb9u"/><path class="a7cqi9b2c"/></g>`,
		"fallback": "uix:refresh-cw",
	});
}

export default Component;
