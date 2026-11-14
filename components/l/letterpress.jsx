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
		"content": `<style>.k8-upiblu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14M8.5 13.5L12 6l3.5 7.5M5 13.5h14V21H5Zm5.25-3h3.5");
}
</style><path class="k8-upiblu"/>`,
		"fallback": "uix-sharp:letterpress",
	});
}

export default Component;
