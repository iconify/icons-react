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
		"content": `<style>.shxk8y2pl {
  d: path("M14.5 16v-1.5H16m4 0h1.5V16m0 4v1.5H20m-4 0h-1.5V20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.we74n-pzu {
  d: path("M11.7 20.5H3.5V5h17v6.7M8 3v4m8-4v4M3.5 10h17");
}
</style><g class="ulnmmdpxh"><path class="we74n-pzu"/><path class="shxk8y2pl"/></g>`,
		"fallback": "uix-sharp:scan-booking",
	});
}

export default Component;
