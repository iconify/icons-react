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
		"content": `<style>.gi8fktb3o {
  d: path("m12 12 5 -5");
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w9g5wtasy {
  d: path("M14 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zey5ebc0a {
  d: path("M7 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}
</style><g class="s0phu2bbs"><path class="o_ssmh9ez"/><path class="zey5ebc0a"/><path class="gi8fktb3o"/><path class="w9g5wtasy"/></g>`,
		"fallback": "iconmind:weather-radar-outline-bold",
	});
}

export default Component;
