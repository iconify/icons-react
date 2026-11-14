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
		"content": `<style>.awcos6mbf {
  d: path("M8.5 2.5H20A1.5 1.5 0 0 1 21.5 4v11.5m-16-3h7m-7 4h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k_s34rbhe {
  d: path("M5.125 8.5h7.75a2.625 2.625 0 0 1 2.625 2.625v7.75a2.625 2.625 0 0 1-2.625 2.625h-7.75A2.625 2.625 0 0 1 2.5 18.875v-7.75A2.625 2.625 0 0 1 5.125 8.5");
}

.maeuszbrt {
  d: path("M5.5 5.5H17A1.5 1.5 0 0 1 18.5 7v11.5");
}
</style><g class="hntgybcog"><path class="k_s34rbhe"/><path class="maeuszbrt"/><path class="awcos6mbf"/></g>`,
		"fallback": "uix:newspaper-stack",
	});
}

export default Component;
