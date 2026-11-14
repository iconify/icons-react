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
		"content": `<style>.vkdgyac6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.811 9.646l11.782-5.494l1.69 3.625l-11.782 5.494ZM12 11.5L8 20m4-8.5l4 8.5m-4-8.5V20");
}
</style><path class="vkdgyac6x"/>`,
		"fallback": "uix-sharp:telescope-class",
	});
}

export default Component;
