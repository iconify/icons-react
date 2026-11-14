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
		"content": `<style>.a1rpqgblb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5L3 7l4 4.5m10-9L21 7l-4 4.5m-4-9l-2 9m3.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm1 2.5l5-5");
}
</style><path class="a1rpqgblb"/>`,
		"fallback": "uix-sharp:no-code",
	});
}

export default Component;
