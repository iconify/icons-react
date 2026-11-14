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
		"content": `<style>.ke_o-043m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 21V3.5m-4 4l4-4l4 4M6.5 21v-3.5Q6.5 13 14 11");
}
</style><path class="ke_o-043m"/>`,
		"fallback": "uix-sharp:merge-left",
	});
}

export default Component;
