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
		"content": `<style>.zqo7ofbsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 8a2.25 5.5 0 1 0 4.5 0a2.25 5.5 0 1 0-4.5 0ZM12 13.5v8m-9.5-11a2.25 4.5 0 1 0 4.5 0a2.25 4.5 0 1 0-4.5 0ZM4.75 15v6.5M17 10.5a2.25 4.5 0 1 0 4.5 0a2.25 4.5 0 1 0-4.5 0Zm2.25 4.5v6.5");
}
</style><path class="zqo7ofbsh"/>`,
		"fallback": "uix-sharp:tree-grove",
	});
}

export default Component;
