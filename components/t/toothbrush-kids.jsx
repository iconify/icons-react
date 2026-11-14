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
		"content": `<style>.bd047-bbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12H14c1 0 1.5-.5 2.5-.5h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3c-1 0-1.5-.5-2.5-.5H4.5a2.5 2.5 0 0 1 0-5m12.25-5.5v5m3-5v5");
}
</style><path class="bd047-bbh"/>`,
		"fallback": "uix:toothbrush-kids",
	});
}

export default Component;
