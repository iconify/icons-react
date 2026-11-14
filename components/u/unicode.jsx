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
		"content": `<style>.zn6gfziii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5v12a4.75 4.75 0 0 0 9.5 0v-12M18 9v6m-3-3h6");
}
</style><path class="zn6gfziii"/>`,
		"fallback": "uix-sharp:unicode",
	});
}

export default Component;
