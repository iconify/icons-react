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
		"content": `<style>.g9_1lxnwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.25h18.5v10H2.75zm3.5 6h11.5m-11 4h10.5v7H6.75v-1ZM10 19l2.5-2.5");
}
</style><path class="g9_1lxnwm"/>`,
		"fallback": "iconoven:laminator-sharp",
	});
}

export default Component;
