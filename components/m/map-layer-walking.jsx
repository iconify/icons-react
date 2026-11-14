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
		"content": `<style>.ll8teqnoa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM13 9.5l-1.5 5m0 0l3 3l.5 4m-3.5-7l-3.5 7m0-9l2.25-2.5L13 9.5l2.75 3.25");
}
</style><path class="ll8teqnoa"/>`,
		"fallback": "uix-sharp:map-layer-walking",
	});
}

export default Component;
