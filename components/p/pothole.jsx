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
		"content": `<style>.s_b_aubfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h4l2 4.5l2-1l2 2.5l2-2l1.5 1l1.5-5h4v14h-19Zm0 9.5h19");
}
</style><path class="s_b_aubfl"/>`,
		"fallback": "uix-sharp:pothole",
	});
}

export default Component;
