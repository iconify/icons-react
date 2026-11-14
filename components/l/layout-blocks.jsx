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
		"content": `<style>.s0h_1dbjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5H7V7H2.5Zm7.25 0h4.5V7h-4.5Zm7.25 0h4.5V7H17ZM2.5 9.75H7v4.5H2.5Zm7.25 0h4.5v4.5h-4.5Zm7.25 0h4.5v4.5H17ZM2.5 17H7v4.5H2.5Zm7.25 0h4.5v4.5h-4.5ZM17 17h4.5v4.5H17Z");
}
</style><path class="s0h_1dbjk"/>`,
		"fallback": "uix-sharp:layout-blocks",
	});
}

export default Component;
