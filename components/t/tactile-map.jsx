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
		"content": `<style>.v74m2w9zz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 6l6-2.5L15 6l6-2.5V18l-6 2.5L9 18l-6 2.5Zm5.5 3.5h.01m6.99 0h.01m-7.01 5h.01m6.99 0h.01");
}
</style><path class="v74m2w9zz"/>`,
		"fallback": "uix-sharp:tactile-map",
	});
}

export default Component;
