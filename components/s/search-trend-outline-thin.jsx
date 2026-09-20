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

.p367mshbv {
  d: path("M5.5 10a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0 -13 0");
}

.pn9c354sg {
  d: path("m9 12 2 -2 2 2 2 -2");
}

.rseiusb3q {
  d: path("M16.5 14.5 21 19");
}
</style><g class="hntgybcog"><path class="p367mshbv"/><path class="rseiusb3q"/><path class="pn9c354sg"/></g>`,
		"fallback": "iconmind:search-trend-outline-thin",
	});
}

export default Component;
