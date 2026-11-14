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
		"content": `<style>.aubm20e8m {
  d: path("M13.1 21.5H4.5v-19h15v9.6M8 7h8m-8 4h8m-8 4h4");
}

.kx0owfbww {
  d: path("M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm1-2.25l4.5 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aubm20e8m"/><path class="kx0owfbww"/></g>`,
		"fallback": "uix-sharp:ip-blocklist",
	});
}

export default Component;
