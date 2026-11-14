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
		"content": `<style>.fx63_2v3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 18.5h2m4-5.598a3 3 0 0 1 0 5.196m-3-5.598h-3m-3.25-.469a3.5 3.5 0 0 1 0-6.062M10.5 5.5H13m-9.5 13a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m12-13a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><path class="fx63_2v3x"/>`,
		"fallback": "uix:route-dashed",
	});
}

export default Component;
