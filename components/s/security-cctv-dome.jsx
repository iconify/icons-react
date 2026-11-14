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
		"content": `<style>.sjwt3mbih {
  d: path("M2.5 4h19m-14 0v3h9V4M5 7h14c0 6.5-3 11-7 11S5 13.5 5 7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yelp5pb9k {
  d: path("M10 12.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="sjwt3mbih"/><path class="yelp5pb9k"/></g>`,
		"fallback": "uix-sharp:security-cctv-dome",
	});
}

export default Component;
