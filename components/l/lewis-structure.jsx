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
		"content": `<style>.u9pdg1b9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m11-11a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-4.25 8.25l5.5-5.5m-6.5 1.5h.01m2.49-2.5h.01");
}
</style><path class="u9pdg1b9g"/>`,
		"fallback": "uix:lewis-structure",
	});
}

export default Component;
