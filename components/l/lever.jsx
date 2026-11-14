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
		"content": `<style>.ryhphfncs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9.5l18 6m-9-3l3.5 7h-7Zm-8.75-9h4v4h-4ZM19 3.5V10m-2-2l2 2l2-2");
}
</style><path class="ryhphfncs"/>`,
		"fallback": "uix-sharp:lever",
	});
}

export default Component;
