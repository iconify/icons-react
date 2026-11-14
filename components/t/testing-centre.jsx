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
		"content": `<style>.jrh4xqb0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5v15a3.5 3.5 0 0 0 7 0v-15M7 2.5h10M8.5 12h7");
}
</style><path class="jrh4xqb0h"/>`,
		"fallback": "uix-sharp:testing-centre",
	});
}

export default Component;
