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
		"content": `<style>.svl_r_bfu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h14.5v18.5H4.75zM8 7.25h4.5m2 0H16m-8 3.5h4.5m2 0H16m-8 3.5h4.5m2 0H16m-8 3.5h8");
}
</style><path class="svl_r_bfu"/>`,
		"fallback": "iconoven:order-list-sharp",
	});
}

export default Component;
