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
		"content": `<style>.z9gneobtg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-2 10v-2c0-1.75 2-2.75 4.5-2.75s4.5 1 4.5 2.75v2m-11 6.5h13V19H17v-4H7v4H5.5Z");
}
</style><path class="z9gneobtg"/>`,
		"fallback": "uix-sharp:pin-statue",
	});
}

export default Component;
