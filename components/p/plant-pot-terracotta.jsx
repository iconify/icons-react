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
		"content": `<style>.vv1ux8b8y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 11h15v3.5h-15ZM6 14.5h12l-1.5 7h-9Zm6-3.5V8c-.25-3-2.25-5-5.25-5C6.75 6 9 8 12 8c.25-3.25 2.25-5.5 5.25-5.5c0 3-2 5.5-5.25 5.5");
}
</style><path class="vv1ux8b8y"/>`,
		"fallback": "uix-sharp:plant-pot-terracotta",
	});
}

export default Component;
