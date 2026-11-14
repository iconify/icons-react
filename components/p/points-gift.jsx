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
		"content": `<style>.bbcdxf8xp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.745 16.66L11 16.25l-5.143 2.829l1.101-5.766l-4.28-4.017l5.824-.734L11 3.25l2.498 5.312l5.824.734l-3.689 3.463M14.5 17h7v4.75h-7Zm3.5 0v4.75M18 17c-1-2-2.5-1.75-2-.75c.5.75 1.5.75 2 .75s1.5 0 2-.75c.5-1-1-1.25-2 .75Z");
}
</style><path class="bbcdxf8xp"/>`,
		"fallback": "uix-sharp:points-gift",
	});
}

export default Component;
