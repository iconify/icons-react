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
		"content": `<style>.u0rkxsbju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5V2.5h4V5M7.5 5h9v6.5h-9Zm2.5 6.5V21m4-9.5V21m-9.5 0h15");
}
</style><path class="u0rkxsbju"/>`,
		"fallback": "uix-sharp:makiwara",
	});
}

export default Component;
