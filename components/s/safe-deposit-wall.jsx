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
		"content": `<style>.d9jt9j4yw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3H17v18H2.5ZM17 3l4.5 1.75v6L17 9ZM9.75 3v18M2.5 9H17M2.5 15H17M6.25 6h.01m-.01 6h.01m7.24 0h.01m-7.26 6h.01m7.24 0h.01");
}
</style><path class="d9jt9j4yw"/>`,
		"fallback": "uix-sharp:safe-deposit-wall",
	});
}

export default Component;
