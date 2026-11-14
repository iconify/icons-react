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
		"content": `<style>.hl6_2tble {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 18a7 7 0 0 1 14 0M2.5 18h19M12 6v2m-8 2l1.75 1.5M20 10l-1.75 1.5M8 21.5h8");
}
</style><path class="hl6_2tble"/>`,
		"fallback": "uix-sharp:sunrise-view",
	});
}

export default Component;
