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
		"content": `<style>.mviiklbjl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15 20.8v.7H4V9h11v6.2M7.5 6.5h4V9h-4Zm2 0V3H15m3 12v6m-3-3h6");
}
</style><path class="mviiklbjl"/>`,
		"fallback": "uix-sharp:medicated-shampoo",
	});
}

export default Component;
