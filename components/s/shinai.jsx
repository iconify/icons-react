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
		"content": `<style>.pdjh8zc6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.464 19.414l4.95-4.95l2.122 2.122l-4.95 4.95ZM6.5 13.5l4 4m-2-2l9-9m3.25-1.25L17.5 6.5l1.25-3.25");
}
</style><path class="pdjh8zc6e"/>`,
		"fallback": "uix-sharp:shinai",
	});
}

export default Component;
