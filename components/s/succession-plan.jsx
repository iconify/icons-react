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
		"content": `<style>.u-h7isb6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.224 19H5L3 6.5L7.75 11L12 4l4.25 7L21 6.5l-1.048 6.552M15 18h6m-2.5-2.5L21 18l-2.5 2.5");
}
</style><path class="u-h7isb6j"/>`,
		"fallback": "uix-sharp:succession-plan",
	});
}

export default Component;
