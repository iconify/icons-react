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
		"content": `<style>.xe-qfy1aa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h8v18h-8Zm11 0h8v4h-8Zm0 7h8v4h-8Zm0 7h8v4h-8Zm-8-10h2");
}
</style><path class="xe-qfy1aa"/>`,
		"fallback": "uix-sharp:pets-vs-cattle",
	});
}

export default Component;
