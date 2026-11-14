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
		"content": `<style>.ccm5orl3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 9.5L8 21.5h8l1.75-12M5.5 9.5a3 3 0 0 1 3-3a3.5 3.5 0 0 1 7 0a3 3 0 0 1 3 3ZM17 7l3-3.5");
}
</style><path class="ccm5orl3w"/>`,
		"fallback": "uix-sharp:milkshake-glass",
	});
}

export default Component;
