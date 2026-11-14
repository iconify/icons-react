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
		"content": `<style>.wgj8_grhy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4h17M6 4L2.5 21.5M18 4l3.5 17.5M10 4v10m4-10v10m-5.5 0h7");
}
</style><path class="wgj8_grhy"/>`,
		"fallback": "uix-sharp:swing-set",
	});
}

export default Component;
