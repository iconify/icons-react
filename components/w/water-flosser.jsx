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
		"content": `<style>.aja2g60he {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 19v-8c0-1.5 1-2.5 3-2.5s3 1 3 2.5v8A2.5 2.5 0 0 1 8 21.5H7A2.5 2.5 0 0 1 4.5 19m3-10.5v-3l3-3m-3 10v3m11-1.25L16 17a2.75 2.75 0 1 0 5 0Z");
}
</style><path class="aja2g60he"/>`,
		"fallback": "uix:water-flosser",
	});
}

export default Component;
