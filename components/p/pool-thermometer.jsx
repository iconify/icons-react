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
		"content": `<style>.wtnx4rbqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5a2 2 0 0 1 4 0v8.25a3.25 3.25 0 1 1-4 0ZM12 8v7m-9.5 0q1.75-1.5 3.5 0q.75.75 1.5.5m9 0q.75.25 1.5-.5q1.75-1.5 3.5 0");
}
</style><path class="wtnx4rbqc"/>`,
		"fallback": "uix-sharp:pool-thermometer",
	});
}

export default Component;
