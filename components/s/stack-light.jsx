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
		"content": `<style>.gq6fa8p7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7v13h-7Zm3.5 13v5m-4 0h8M8.5 6.75h7m-7 4.5h7");
}
</style><path class="gq6fa8p7h"/>`,
		"fallback": "uix-sharp:stack-light",
	});
}

export default Component;
