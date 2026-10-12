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
		"content": `<style>.q18ttac4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 20.25v-8.5a6.75 6.75 0 0 1 13.5 0v8.5");
}
</style><path class="q18ttac4m"/>`,
		"fallback": "iconoven:set-intersection-sharp",
	});
}

export default Component;
