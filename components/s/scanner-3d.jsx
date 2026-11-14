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
		"content": `<style>.pws0wbcby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8V6A2.5 2.5 0 0 1 6 3.5h2m8 0h2A2.5 2.5 0 0 1 20.5 6v2m0 8v2a2.5 2.5 0 0 1-2.5 2.5h-2m-8 0H6A2.5 2.5 0 0 1 3.5 18v-2M12 7.5l3.897 2.25v4.5L12 16.5l-3.897-2.25v-4.5Zm0 4.5v4.5m0-4.5L8.25 9.75M12 12l3.75-2.25");
}
</style><path class="pws0wbcby"/>`,
		"fallback": "uix-sharp:scanner-3d",
	});
}

export default Component;
