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
		"content": `<style>.a9ixb0bts {
  d: path("M7 5.5H5.5a2.5 2.5 0 0 0 0 5h1.75m9.75-5h1.5a2.5 2.5 0 0 1 0 5h-1.75m-4.75 3V18m-4.5 0h9v3.5h-9Z");
}

.pfzd08f0w {
  d: path("M7 3.5h10v5a5 5 0 0 1-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pfzd08f0w"/><path class="a9ixb0bts"/></g>`,
		"fallback": "uix-sharp:journalism-award",
	});
}

export default Component;
