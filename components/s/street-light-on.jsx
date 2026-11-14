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
		"content": `<style>.i06htx42p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.5V7a4 4 0 0 1 4-4h2m0 0h8L19 6.5h-5ZM4 21.5h5m7.5-12V12m-3.75-2.75l-1.25 2m8.75-2l1.25 2");
}
</style><path class="i06htx42p"/>`,
		"fallback": "uix-sharp:street-light-on",
	});
}

export default Component;
