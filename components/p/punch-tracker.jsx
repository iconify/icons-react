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
		"content": `<style>.lm1z8wjac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0m3-9.5v4.25m6-4.25v4.25m-6 10.5v4.25m6-4.25v4.25M10 12h4");
}
</style><path class="lm1z8wjac"/>`,
		"fallback": "uix:punch-tracker",
	});
}

export default Component;
