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
		"content": `<style>.y8-8ip78c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.523 18.5H2.5L11 3l7.733 13.318M11 9.25v3m0 3h.01M15 18l3 3l3-3");
}
</style><path class="y8-8ip78c"/>`,
		"fallback": "uix-sharp:severity-minor",
	});
}

export default Component;
