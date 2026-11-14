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
		"content": `<style>.oklxlmbnf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.817 12.276L16.5 10h-6l1-7.5l-8 10h6l-1.5 9l4.083-5.524M15.5 15.5l5 5m0-5l-5 5");
}
</style><path class="oklxlmbnf"/>`,
		"fallback": "uix-sharp:sprint-cancel",
	});
}

export default Component;
