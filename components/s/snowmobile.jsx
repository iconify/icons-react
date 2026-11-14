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
		"content": `<style>.awsp_v1ry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13h11v5H3Zm2.5 0v-2.5h4l2-3H14l5.5 5.5H16m-2.5-5.5l-1-3H15m2 8.5v7m-2 0h5.5a1.5 1.5 0 0 0 1.5-1.5");
}
</style><path class="awsp_v1ry"/>`,
		"fallback": "uix-sharp:snowmobile",
	});
}

export default Component;
