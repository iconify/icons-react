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
		"content": `<style>.xdg8njpnt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.404 2.885l3.913.831a2.5 2.5 0 0 1 1.925 2.966l-2.703 12.716a2.5 2.5 0 0 1-2.965 1.925l-3.912-.832a2.5 2.5 0 0 1-1.926-2.965L9.439 4.81a2.5 2.5 0 0 1 2.965-1.925Zm1.229 3.839l-.624 2.935M3.5 14a1.5 3 0 1 0 3 0a1.5 3 0 1 0-3 0Z");
}
</style><path class="xdg8njpnt"/>`,
		"fallback": "uix-sharp:mouse-vertical",
	});
}

export default Component;
