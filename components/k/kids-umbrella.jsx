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
		"content": `<style>.oywp2su2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5a9.5 9 0 0 1 19 0a2.375 1.75 0 0 0-4.75 0a2.375 1.75 0 0 0-4.75 0a2.375 1.75 0 0 0-4.75 0a2.375 1.75 0 0 0-4.75 0Zm9.5 0v6a2 2 0 0 1-4 0");
}
</style><path class="oywp2su2v"/>`,
		"fallback": "uix-sharp:kids-umbrella",
	});
}

export default Component;
