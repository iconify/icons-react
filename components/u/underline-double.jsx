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
		"content": `<style>.t3cr3eb4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3v5.5a5 5 0 0 0 10 0V3M5.5 17h13m-13 3.75h13");
}
</style><path class="t3cr3eb4z"/>`,
		"fallback": "uix-sharp:underline-double",
	});
}

export default Component;
