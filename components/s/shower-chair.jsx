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
		"content": `<style>.a1q803bes {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5h18V12H3Zm4.5 2.75h.01m4.49 0h.01m4.49 0h.01M5 12l-1.5 9.5m6-9.5L9 21.5m5.5-9.5l.5 9.5m4-9.5l1.5 9.5");
}
</style><path class="a1q803bes"/>`,
		"fallback": "uix-sharp:shower-chair",
	});
}

export default Component;
