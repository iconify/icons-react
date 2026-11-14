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
		"content": `<style>.q9dbi7boc {
  d: path("M6 8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1 7.25c0-1.5 1.25-2.5 3-2.5s3 1 3 2.5m3-7.25h4.5M14 12h3m-2.25 6l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwkc4-bza {
  d: path("M11.3 18.5H2.5v-15h19v8.8");
}
</style><g class="ulnmmdpxh"><path class="wwkc4-bza"/><path class="q9dbi7boc"/></g>`,
		"fallback": "uix-sharp:kyc-legal",
	});
}

export default Component;
