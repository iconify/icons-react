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
		"content": `<style>.qitw3j0ag {
  d: path("M14.25 7.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w76bfsbnr {
  d: path("M4 2.5h16v10H4Zm8 10v9m-3.5 0h7M7 6h4.5M7 9h4.5");
}
</style><g class="ulnmmdpxh"><path class="w76bfsbnr"/><path class="qitw3j0ag"/></g>`,
		"fallback": "uix-sharp:intercom-post",
	});
}

export default Component;
