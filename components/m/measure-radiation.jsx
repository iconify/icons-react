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
		"content": `<style>.ccxk_7bbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.25 9l-3-5.25a9.5 9.5 0 0 1 9.5 0l-3 5.25a3.5 3.5 0 0 0-3.5 0Zm5.25 3h6a9.5 9.5 0 0 1-4.75 8.25l-3-5.25a3.5 3.5 0 0 0 1.75-3Zm-8.25 8.25l3-5.25a3.5 3.5 0 0 1-1.75-3h-6a9.5 9.5 0 0 0 4.75 8.25ZM12 12h.01");
}
</style><path class="ccxk_7bbg"/>`,
		"fallback": "uix-sharp:measure-radiation",
	});
}

export default Component;
