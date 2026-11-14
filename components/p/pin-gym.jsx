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
		"content": `<style>.tbbq0wbfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6.5v11H6V15H3.5V9H6V6.5Zm6 0v11h3V15h2.5V9H18V6.5ZM9 12h6");
}
</style><path class="tbbq0wbfs"/>`,
		"fallback": "uix-sharp:pin-gym",
	});
}

export default Component;
