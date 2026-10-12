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
		"content": `<style>.w0cgow6kd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 9h4c0 2.5 5 4.5 5 8.25A3.75 3.75 0 0 1 15.25 21h-6.5A3.75 3.75 0 0 1 5 17.25C5 13.5 10 11.5 10 9ZM9 6h6v3H9zm6 1l3-2M5.52 15.2h12.96");
}
</style><path class="w0cgow6kd"/>`,
		"fallback": "iconoven:soy-sauce-sharp",
	});
}

export default Component;
