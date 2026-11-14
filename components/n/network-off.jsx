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
		"content": `<style>.rj12e8k6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.832 13.745q.162.282.39.513t.508.395M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-7.5 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9.5-12v1.6m-5.75 9.15l3.75-3M3.5 3.5l17 17");
}
</style><path class="rj12e8k6x"/>`,
		"fallback": "uix-sharp:network-off",
	});
}

export default Component;
