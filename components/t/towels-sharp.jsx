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
		"content": `<style>.tqcyoncwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.75h3.5m11.5 0h3.5m-15 0v-2.5h11.5v10H6.25Zm0 7.5h11.5v7.5H6.25v-2Zm0 4.25h11.5");
}
</style><path class="tqcyoncwm"/>`,
		"fallback": "iconoven:towels-sharp",
	});
}

export default Component;
