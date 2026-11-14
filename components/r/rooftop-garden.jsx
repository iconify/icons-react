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

.nkn93o97y {
  d: path("M5.75 12h12.5A1.75 1.75 0 0 1 20 13.75v6a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 19.75v-6A1.75 1.75 0 0 1 5.75 12");
}

.o87k1nbfg {
  d: path("M10 21.5v-4h4v4M12 12V5.5M12 9c0-3-2-4.5-5-4.5C7 7.5 9 9 12 9m0-1.5c0-3 2-4.5 5-4.5c0 3-2 4.5-5 4.5");
}
</style><g class="hntgybcog"><path class="nkn93o97y"/><path class="o87k1nbfg"/></g>`,
		"fallback": "uix:rooftop-garden",
	});
}

export default Component;
