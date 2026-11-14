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
		"content": `<style>.g2_maq-1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h4v8h-4Zm-5 8h14V15H5ZM7.5 15v6m3-6v6m3-6v6m3-6v6");
}
</style><path class="g2_maq-1v"/>`,
		"fallback": "uix-sharp:nail-brush",
	});
}

export default Component;
