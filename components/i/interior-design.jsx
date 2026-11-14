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
		"content": `<style>.rhjr5it8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6m-3 0V7m-5 4a5 4 0 0 1 10 0Zm-3 4.5h16m-13.5 0V21m11-5.5V21");
}
</style><path class="rhjr5it8m"/>`,
		"fallback": "uix-sharp:interior-design",
	});
}

export default Component;
