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
		"content": `<style>.itf7giaql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7a3 2.5 0 1 0 6 0a3 2.5 0 1 0-6 0Zm6 0a3 2.5 0 1 0 6 0a3 2.5 0 1 0-6 0Zm6 0a3 2.5 0 1 0 6 0a3 2.5 0 1 0-6 0Zm-12 8q2.25-1.5 4.5 0t4.5 0m4 .5a2.75 2.75 0 0 1 5.5 0c0 2.25-5.5 3.5-5.5 6h5.75");
}
</style><path class="itf7giaql"/>`,
		"fallback": "uix-sharp:swim-lap-counter",
	});
}

export default Component;
