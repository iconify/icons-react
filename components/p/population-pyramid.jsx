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
		"content": `<style>.kd1xo9wuq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5v-4h2v-4h2v-4h2v-4h5v4h2v4h2v4h2v4Zm8.5-18v19");
}
</style><path class="kd1xo9wuq"/>`,
		"fallback": "uix:population-pyramid",
	});
}

export default Component;
