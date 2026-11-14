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
		"content": `<style>.lysj6h72e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6.5h17M3.5 12h7m-7 5.5h6M13 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm5.25 2.25l2.25 2.25");
}
</style><path class="lysj6h72e"/>`,
		"fallback": "uix-sharp:menu-search",
	});
}

export default Component;
