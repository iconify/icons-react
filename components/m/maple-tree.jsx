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
		"content": `<style>.vf-2duv-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l2.25 4L18.5 5l-1 4.5l3.5 2l-4.5 1.5l.5 2.5l-5-1.5l-5 1.5l.5-2.5L3 11.5l3.5-2l-1-4.5l4.25 1.5ZM12 14v7.5");
}
</style><path class="vf-2duv-d"/>`,
		"fallback": "uix-sharp:maple-tree",
	});
}

export default Component;
