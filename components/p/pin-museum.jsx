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
		"content": `<style>.pllbg97va {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14v3H5Zm3 3v12m8-12v12M5 18h14v3.5H5Zm7-9.5v7");
}
</style><path class="pllbg97va"/>`,
		"fallback": "uix-sharp:pin-museum",
	});
}

export default Component;
