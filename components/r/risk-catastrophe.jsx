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
		"content": `<style>.ltyf6u-8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h17m-15 4h13M8 13h8m-6 4h4m-2.5 3.5h1");
}
</style><path class="ltyf6u-8c"/>`,
		"fallback": "uix-sharp:risk-catastrophe",
	});
}

export default Component;
