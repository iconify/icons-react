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
		"content": `<style>.dxparzb9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5v15a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-15m-17 3h17m-17 4h17M3.5 17h17M14 13.75h8");
}
</style><path class="dxparzb9e"/>`,
		"fallback": "uix-sharp:snow-pit",
	});
}

export default Component;
