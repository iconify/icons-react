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
		"content": `<style>.h_1dd1bhb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15c4 0 5.5-10.5 9-10.5S17 15 21 15M7.5 19h9m-9-2v4m9-4v4");
}
</style><path class="h_1dd1bhb"/>`,
		"fallback": "uix-sharp:standard-deviation",
	});
}

export default Component;
