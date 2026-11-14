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
		"content": `<style>.macyo1ujs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 4.5l14 3l-14 3l14 3l-14 3l14 3M3 4.5h18m-18 15h18");
}
</style><path class="macyo1ujs"/>`,
		"fallback": "uix-sharp:spring-compressed",
	});
}

export default Component;
