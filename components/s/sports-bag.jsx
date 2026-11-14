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
		"content": `<style>.nq6ottbbu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9h15a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2Zm2 0a5.5 5.5 0 0 1 11 0m-11 0v11.5M17.5 9v11.5");
}
</style><path class="nq6ottbbu"/>`,
		"fallback": "uix-sharp:sports-bag",
	});
}

export default Component;
