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
		"content": `<style>.aad07cchx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.5 3.5l8 5l-1 12.5H8L7 8.5h12.5M7.75 19h-4");
}
</style><path class="aad07cchx"/>`,
		"fallback": "uix-sharp:pedal-bin",
	});
}

export default Component;
