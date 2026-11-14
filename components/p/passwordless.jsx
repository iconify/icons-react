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
		"content": `<style>.oa8w91bnl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.9 6h11.6v11.6m-7.4.4H2.5V6.4m4 5.6h.01M17 12h.01M3.5 3.5l17 17");
}
</style><path class="oa8w91bnl"/>`,
		"fallback": "uix-sharp:passwordless",
	});
}

export default Component;
