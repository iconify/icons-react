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
		"content": `<style>.hj2y975em {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9C9 9 13 5 21.5 5m-19 9c6.5 0 10.5-4 19-4m-19 9c6.5 0 10.5-4 19-4");
}
</style><path class="hj2y975em"/>`,
		"fallback": "uix-sharp:laminar-flow",
	});
}

export default Component;
