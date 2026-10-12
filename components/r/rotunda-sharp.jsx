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
		"content": `<style>.jkyqhmt6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10.5a5 5 0 0 1 10 0Zm5-5V2.75M4.25 10.5h15.5M6.5 13.25v5m2.75-5v5m2.75-5v5m2.75-5v5m2.75-5v5m-14.75 3h18.5");
}
</style><path class="jkyqhmt6r"/>`,
		"fallback": "iconoven:rotunda-sharp",
	});
}

export default Component;
