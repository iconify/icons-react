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
		"content": `<style>.zuzb_ybir {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3h6l3.5 5.5L15 21H9L5.5 8.5Zm3 5v7m-2.5-4.5h5");
}
</style><path class="zuzb_ybir"/>`,
		"fallback": "uix-sharp:life-funeral-cover",
	});
}

export default Component;
