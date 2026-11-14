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
		"content": `<style>.q2_ur-0mm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h8v6.5h-8Zm11 0h8v6.5h-8ZM9 17h6v4.5H9ZM6.5 9.5v3h11v-3m-5.5 3V17");
}
</style><path class="q2_ur-0mm"/>`,
		"fallback": "uix-sharp:network-lan",
	});
}

export default Component;
