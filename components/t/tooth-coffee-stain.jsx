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
		"content": `<style>.rbzt_h4kz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.217 12.674l.033-.174c.5-1.75 1.75-3.25 1.75-5.75c0-2.25-1-4.25-3.5-4.25c-1.75 0-2.5 1-4 1s-2.25-1-4-1C4 2.5 3 4.5 3 6.75c0 2.5 1.25 4 1.75 5.75l1 5.25c.25 1.25 1.75 1.25 2 0l1-4c.25-1.25 3.25-1.25 3.5 0l.081.322M14.75 15.5h4.5V19A2.25 2.25 0 0 1 17 21.25A2.25 2.25 0 0 1 14.75 19Zm4.5 1a1.5 1.5 0 0 1 0 3");
}
</style><path class="rbzt_h4kz"/>`,
		"fallback": "uix:tooth-coffee-stain",
	});
}

export default Component;
