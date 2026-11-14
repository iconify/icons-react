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
		"content": `<style>.ozn3xmbce {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3za2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 12 16a2.5 2.5 0 0 1-2.5-2.5v-8A2.5 2.5 0 0 1 12 3M8.25 16h7.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 15.75 20h-7.5a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 8.25 16M2.5 20h19");
}
</style><path class="ozn3xmbce"/>`,
		"fallback": "uix:mast-step",
	});
}

export default Component;
