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
		"content": `<style>.h_wb1wqlm {
  d: path("M14 21v-5.5");
}

.ig5rxfb8s {
  fill: currentColor;
  d: path("m3 3l7.75 3.25a8.4 8.4 0 0 1-4.5 4.5Z");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="ig5rxfb8s"/><path class="h_wb1wqlm"/></g>`,
		"fallback": "uix-sharp:room-scan",
	});
}

export default Component;
