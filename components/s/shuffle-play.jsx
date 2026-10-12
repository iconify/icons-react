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
		"content": `<style>.b45jmv50j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.8 8.18l4.9 3.14q1.05.68 0 1.36l-4.9 3.14q-1.05.68-1.05-.57v-6.5q0-1.25 1.05-.57m7.45 9.32L21 6.5m-3.5 0H21V10m-9.75-3.5l3.35 3.8m3.05 3.4L21 17.5m0-3.5v3.5h-3.5");
}
</style><path class="b45jmv50j"/>`,
		"fallback": "iconoven:shuffle-play",
	});
}

export default Component;
