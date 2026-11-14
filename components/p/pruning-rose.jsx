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
		"content": `<style>.o0nhrcrde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5q2.25 2 4-1q1.75 3 4 1V7a4 4 0 0 1-8 0Zm4 7.5v10.5m0-4l1.699-.85M13.5 16l8 3.5m-5.5-6l3.5 8");
}
</style><path class="o0nhrcrde"/>`,
		"fallback": "uix-sharp:pruning-rose",
	});
}

export default Component;
