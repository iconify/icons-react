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
		"content": `<style>.r2wajvboo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h15v4.5h-15ZM4 7.5l1.5 7h9l1.5-7m-8.5 7V18m5-3.5v2.7m2.75 1.05l2.5-3H22v6h-4.25Zm3.75 0h.01");
}
</style><path class="r2wajvboo"/>`,
		"fallback": "uix-sharp:island-display",
	});
}

export default Component;
