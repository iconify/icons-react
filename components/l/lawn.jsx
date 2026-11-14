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
		"content": `<style>.o_k3h8b8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5h19v4h-19ZM4 9l2 5.5L8 9m2.5-3l1.5 8.5L13.5 6M16 9l2 5.5L20 9");
}
</style><path class="o_k3h8b8l"/>`,
		"fallback": "uix-sharp:lawn",
	});
}

export default Component;
