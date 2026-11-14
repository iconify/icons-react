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
		"content": `<style>.acol-ccpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15h19v5h-19ZM8 12V6.5a4 4 0 0 1 8 0V12Zm2.5 0v3m3-3v3M5 13v9m14-9v9");
}
</style><path class="acol-ccpj"/>`,
		"fallback": "uix-sharp:water-hammer-arrestor",
	});
}

export default Component;
