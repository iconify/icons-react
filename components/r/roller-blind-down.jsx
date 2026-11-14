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
		"content": `<style>.vxribfuyh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h17v3h-17Zm1 3v13h8.1m6.9-6.8V5.5m-7.5 13v3m7-7V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="vxribfuyh"/>`,
		"fallback": "uix-sharp:roller-blind-down",
	});
}

export default Component;
