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
		"content": `<style>.bwhpvhb8s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5c0-5 3.5-8 7.5-8s7.5 3 7.5 8Zm6 0v9a1.5 1.5 0 0 0 3 0v-9m-5-3h.01m6.49-1h.01M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm1-2.5l5 5");
}
</style><path class="bwhpvhb8s"/>`,
		"fallback": "uix-sharp:mushroom-forage-warning",
	});
}

export default Component;
