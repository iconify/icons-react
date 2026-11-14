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
		"content": `<style>.nh0h74__n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5h7m-7 5h7m-7 5h7m-7 5H8m5.5-15h7m-7 5h7m-7 5h7m-7 5H18");
}
</style><path class="nh0h74__n"/>`,
		"fallback": "uix-sharp:text-columns",
	});
}

export default Component;
