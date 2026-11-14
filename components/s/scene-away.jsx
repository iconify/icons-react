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
		"content": `<style>.uh8bxfb6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 15.4v6.1H3.5v-19H14v6.1M8.5 12h12m-3-3l3 3l-3 3");
}
</style><path class="uh8bxfb6l"/>`,
		"fallback": "uix-sharp:scene-away",
	});
}

export default Component;
