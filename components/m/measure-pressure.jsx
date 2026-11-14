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
		"content": `<style>.jp2gcpp0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0m8 8v3m-3 0h6m-3-11l2.75-4m-2.75 4h.01");
}
</style><path class="jp2gcpp0p"/>`,
		"fallback": "uix:measure-pressure",
	});
}

export default Component;
