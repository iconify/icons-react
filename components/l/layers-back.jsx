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
		"content": `<style>.b630non8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3.5L16 7.25L9.5 11L3 7.25ZM3 11.25L9.5 15l6.5-3.75M3 15l6.5 3.75L16 15m3.5-11v15.75m-2-2l2 2l2-2");
}
</style><path class="b630non8g"/>`,
		"fallback": "uix-sharp:layers-back",
	});
}

export default Component;
