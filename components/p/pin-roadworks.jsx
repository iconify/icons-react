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
		"content": `<style>.f33h54b4g {
  d: path("m9.25 14.5l2-7.5h1.5l2 7.5m-7.25 0h9");
}

.fgqqg8b1s {
  d: path("M12 21.5C9 19 3.5 15 3.5 11a8.5 8.5 0 0 1 17 0c0 4-5.5 8-8.5 10.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fgqqg8b1s"/><path class="f33h54b4g"/></g>`,
		"fallback": "uix-sharp:pin-roadworks",
	});
}

export default Component;
