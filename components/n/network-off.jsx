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
		"content": `<style>.x1lmspb8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.832 13.745q.162.282.39.513t.508.395M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-7.5 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9.5-12v1.6m-5.75 9.15l3.75-3M3.5 3.5l17 17");
}
</style><path class="x1lmspb8p"/>`,
		"fallback": "uix:network-off",
	});
}

export default Component;
