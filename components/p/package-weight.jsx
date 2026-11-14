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
		"content": `<style>.pu7q2qbgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 20.5h10L19 9H5Zm2.5-15a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-1 9h7");
}
</style><path class="pu7q2qbgg"/>`,
		"fallback": "uix-sharp:package-weight",
	});
}

export default Component;
