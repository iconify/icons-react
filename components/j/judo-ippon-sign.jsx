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
		"content": `<style>.m863l8bis {
  d: path("M5 2.5h14v14H5Zm7 14v5");
}

.nr6n7um3h {
  fill: currentColor;
  d: path("M8.5 9.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m863l8bis"/><path class="nr6n7um3h"/></g>`,
		"fallback": "uix-sharp:judo-ippon-sign",
	});
}

export default Component;
