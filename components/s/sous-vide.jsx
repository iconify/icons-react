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

.j-wkxqbtk {
  d: path("M15.5 2.5za2 2 0 0 1 2 2v11a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2m2 5H20V10M4 13c1.5-1.25 3 1.25 4.75 0s3.25 1.25 4.75 0");
}

.l3ev0rb3z {
  d: path("M4 10v8.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10");
}
</style><g class="hntgybcog"><path class="l3ev0rb3z"/><path class="j-wkxqbtk"/></g>`,
		"fallback": "uix:sous-vide",
	});
}

export default Component;
