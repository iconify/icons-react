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
		"content": `<style>.bsl4e65ev {
  d: path("M10.5 21.5V19a1.5 1.5 0 0 1 3 0v2.5");
}

.kj8p9wbrg {
  d: path("M10.5 11.5c-6.5-2-6-5.5 1.5-9c7.5 3.5 8 7 1.5 9Zm-2 0h7v3h-7Zm-3 3h13v7h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kj8p9wbrg"/><path class="bsl4e65ev"/></g>`,
		"fallback": "uix-sharp:onion-dome",
	});
}

export default Component;
