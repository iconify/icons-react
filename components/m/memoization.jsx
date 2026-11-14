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
		"content": `<style>.ug6drln_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 3.5c-3 0-4.5 1-5 2.5c-2.5.5-3.5 3-2.5 5c-1 2 0 4.5 2.5 5c.5 1.5 2.5 2.5 5 2m0-14.5c3 0 4.5 1 5 2.5c2.5.5 3.5 3 2.5 5q.177.356.272.728m-6.052 6.385A6.3 6.3 0 0 1 11 18m0-14.5V18m4.5-3.5h5v7l-2.5-2l-2.5 2Z");
}
</style><path class="ug6drln_f"/>`,
		"fallback": "uix:memoization",
	});
}

export default Component;
