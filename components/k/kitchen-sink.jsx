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
		"content": `<style>.dhb1_demx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h19m-17 0v5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-2.5 0v-6a2.5 2.5 0 0 0-5 0v2");
}
</style><path class="dhb1_demx"/>`,
		"fallback": "uix:kitchen-sink",
	});
}

export default Component;
