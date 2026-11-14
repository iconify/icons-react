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
		"content": `<style>.hjgn1_yww {
  d: path("m8.5 10l-2-7.5h4L12 7m3.5 3l2-7.5h-4L12 7m-1.25 5.5l1.5-1v5");
}

.s6grmfbsj {
  d: path("M6.5 14a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s6grmfbsj"/><path class="hjgn1_yww"/></g>`,
		"fallback": "uix-sharp:quote-best-price",
	});
}

export default Component;
