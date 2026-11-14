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
		"content": `<style>.nuewlabff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 2.5L3.5 13h6l-1 8.5l8-10.5h-6ZM20 4v10m0 4.25h.01");
}
</style><path class="nuewlabff"/>`,
		"fallback": "uix-sharp:lightning-warning",
	});
}

export default Component;
