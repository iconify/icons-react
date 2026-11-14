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
		"content": `<style>.pzd2d2bxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3h9v2.5H19V21h-2.5v-2.5H14V21h-4v-2.5H7.5V21H5V5.5h2.5Zm2 6v3m5-3v3");
}
</style><path class="pzd2d2bxm"/>`,
		"fallback": "uix-sharp:pixel-ghost",
	});
}

export default Component;
