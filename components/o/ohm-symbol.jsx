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
		"content": `<style>.f5glud0wk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 14h4v-1.5a5.25 5.25 0 1 1 6 0V14h4M2.5 19.25h3.25L7 17.5L9.5 21l2.5-3.5l2.5 3.5l2.5-3.5l1.25 1.75h3.25");
}
</style><path class="f5glud0wk"/>`,
		"fallback": "uix-sharp:ohm-symbol",
	});
}

export default Component;
