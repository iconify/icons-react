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
		"content": `<style>.eqw5_hb0u {
  d: path("M6.5 8.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM18 13.5c2.75 1.75 3 5 0 5c-2.5 0-2.75-2.25-1.5-3.25c.25 1 .75 1.25 1 1.25c-.25-1 0-2 .5-3Zm-3.75 7l7.5 1.5m-7.5 0l7.5-1.5");
}

.ni4rambtz {
  d: path("m8.75 19.5l-5-7a6.25 6.25 0 1 1 10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ni4rambtz"/><path class="eqw5_hb0u"/></g>`,
		"fallback": "uix-sharp:pin-campfire",
	});
}

export default Component;
