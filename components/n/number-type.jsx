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
		"content": `<style>.bjj6b7v5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.75 3l-2 18m8.5-18l-2 18M3.5 8.5h17m-17 7h17");
}
</style><path class="bjj6b7v5v"/>`,
		"fallback": "uix-sharp:number-type",
	});
}

export default Component;
