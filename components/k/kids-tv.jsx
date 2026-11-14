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
		"content": `<style>.dh37rtvuq {
  d: path("M9 14.25q3 3 6 0M9.5 11h.01m4.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z3c-j02jo {
  d: path("M3 7.5h18V21H3Zm6-5l3 5m3-5l-3 5");
}
</style><g class="ulnmmdpxh"><path class="z3c-j02jo"/><path class="dh37rtvuq"/></g>`,
		"fallback": "uix-sharp:kids-tv",
	});
}

export default Component;
