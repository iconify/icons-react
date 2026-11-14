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
		"content": `<style>.fkzxp82if {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 6l4-1L10 9.5l3.5 8l3.5 2l4.5-5.5m-19-1.5h2m2 0h2m6.5 0h2m2.5 0h2");
}
</style><path class="fkzxp82if"/>`,
		"fallback": "uix-sharp:loan-overdraft",
	});
}

export default Component;
