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
		"content": `<style>.it04ujbmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 21.5l-8-8c-2.5-2.5-1.5-9 4-9c2 0 3.25 1.25 4 2.5c.75-1.25 2-2.5 4-2.5c5.5 0 6.5 6.5 4 9Zm0-11.75v6.5M8.75 13h6.5");
}
</style><path class="it04ujbmw"/>`,
		"fallback": "uix-sharp:pharmacy-cross-heart",
	});
}

export default Component;
