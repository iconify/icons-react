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
		"content": `<style>.qa2tyfbjl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h14.5v13.5H4.75zm0 5.75l5.75-5.75m-5.75 11l11-11m-8 13.5l11.5-11.5M13 16.25L19.25 10m-16.5 8.75h18.5v2.5H2.75z");
}
</style><path class="qa2tyfbjl"/>`,
		"fallback": "iconoven:stretch-wrap-sharp",
	});
}

export default Component;
