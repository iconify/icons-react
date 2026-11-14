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
		"content": `<style>.j0_gtur-i {
  d: path("m3 7l9 4.5L21 7m-9 4.5v4.1m0 .3v5.6m3-3.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm.75-2.25l4.5 4.5");
}

.kppldlbxi {
  d: path("M13.006 20.997L12 21.5L3 17V7l9-4.5L21 7v6.038");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kppldlbxi"/><path class="j0_gtur-i"/></g>`,
		"fallback": "uix-sharp:package-deprecated",
	});
}

export default Component;
