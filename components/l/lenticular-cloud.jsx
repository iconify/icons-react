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
		"content": `<style>.ko94wfblw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8q9-6.5 18 0q-9 3.5-18 0m-.5 12L9 13.5l3.5 3.5l3-3l6 6");
}
</style><path class="ko94wfblw"/>`,
		"fallback": "uix:lenticular-cloud",
	});
}

export default Component;
