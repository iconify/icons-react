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
		"content": `<style>.oovm_qb4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15h18v3a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18Zm0 0c0-6 5-8.5 10.5-8.5H18c1.5 0 3 .5 3 2V15m-9-4h5");
}
</style><path class="oovm_qb4i"/>`,
		"fallback": "uix-sharp:stapler",
	});
}

export default Component;
