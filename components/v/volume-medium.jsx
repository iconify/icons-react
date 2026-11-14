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
		"content": `<style>.twhufmb1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9h4l5-4.5v15l-5-4.5h-4Zm11.475.525a3.5 3.5 0 0 1 0 4.95m3.869-5.433a7 7 0 0 1 0 5.916");
}
</style><path class="twhufmb1p"/>`,
		"fallback": "uix-sharp:volume-medium",
	});
}

export default Component;
