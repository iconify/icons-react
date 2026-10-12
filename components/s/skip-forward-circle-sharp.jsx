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
		"content": `<style>.qj-77t84l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.19 5.74l7.62 5.27l1.44.99l-1.44.99l-7.62 5.27l-1.44.99V4.75zm13.06-.99v14.5");
}
</style><path class="qj-77t84l"/>`,
		"fallback": "iconoven:skip-forward-circle-sharp",
	});
}

export default Component;
