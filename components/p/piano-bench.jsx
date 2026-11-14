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
		"content": `<style>.fbljz4bsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h14a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 9H5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 5 4m.5 5v10.5M15.5 9v6.5m-.5 4.25a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0m4.5 0V14m0 0l2 1.5");
}
</style><path class="fbljz4bsi"/>`,
		"fallback": "uix:piano-bench",
	});
}

export default Component;
