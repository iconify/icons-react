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
		"content": `<style>.wd8yg0ieh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM12 9.5v11m-4 0v-8h8v8M5 8v12.5M19 8v12.5m-16.5 0h19");
}
</style><path class="wd8yg0ieh"/>`,
		"fallback": "uix-sharp:tree-guard",
	});
}

export default Component;
