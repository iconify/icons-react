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
		"content": `<style>.gx5mfib2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 15l4-7.5h11l4 7.5Zm0 0h19v4.5h-19ZM12 7.5V15");
}
</style><path class="gx5mfib2v"/>`,
		"fallback": "uix-sharp:printer-3d-bed",
	});
}

export default Component;
