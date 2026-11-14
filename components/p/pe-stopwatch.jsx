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
		"content": `<style>.q331_mwdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 13.5a7.75 7.75 0 1 0 15.5 0a7.75 7.75 0 1 0-15.5 0M10 2.5h4m-2 0v3.25m0 7.75l3-2.5m3.5-5.5l1.25 1.25");
}
</style><path class="q331_mwdb"/>`,
		"fallback": "uix:pe-stopwatch",
	});
}

export default Component;
