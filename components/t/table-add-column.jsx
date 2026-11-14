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
		"content": `<style>.qj3x63bxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h9.5v16H3Zm4.75 0v16M18.5 9v6m-3-3h6");
}
</style><path class="qj3x63bxp"/>`,
		"fallback": "uix-sharp:table-add-column",
	});
}

export default Component;
