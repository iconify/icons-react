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
		"content": `<style>.m_2akfb4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7.5v9l-3-2v-5Zm0 3h3.5m-3.5 3h3.5m0-6h12v9h-12Zm0-4.5v18m4-13.5v9m4-9v9");
}
</style><path class="m_2akfb4i"/>`,
		"fallback": "uix-sharp:screw-anchor",
	});
}

export default Component;
