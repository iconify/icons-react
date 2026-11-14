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
		"content": `<style>.ryr6_tbry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 2.5h5v19h-5ZM4.214 8.17a5 5 0 0 1 0 7.66M7.106 4.723a9.5 9.5 0 0 1 0 14.554");
}
</style><path class="ryr6_tbry"/>`,
		"fallback": "uix-sharp:sound-barrier",
	});
}

export default Component;
