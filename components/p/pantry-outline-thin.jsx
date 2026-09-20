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
		"content": `<style>.a1mgubcgh {
  d: path("M13 19v-5h4v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k187sabpz {
  d: path("M2 11h20");
}

.mia87q3wc {
  d: path("M5 11V6h4v5");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="hntgybcog"><path class="k187sabpz"/><path class="z9ittvbis"/><path class="mia87q3wc"/><path class="a1mgubcgh"/></g>`,
		"fallback": "iconmind:pantry-outline-thin",
	});
}

export default Component;
