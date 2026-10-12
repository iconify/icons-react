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
		"content": `<style>.vhdo40blg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 7.75v-4h4m8.5 0h4v4m0 8.5v4h-4m-8.5 0h-4v-4m7-12.5h2.5m-2.5 16.5h2.5m-9.5-9.5v2.5m16.5-2.5v2.5");
}
</style><path class="vhdo40blg"/>`,
		"fallback": "iconoven:selection-minus-sharp",
	});
}

export default Component;
