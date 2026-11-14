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
		"content": `<style>.eajkh3y6s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 18.5V20H3v-9l5.5-5l5.5 5v1.5m-3.5 3h11m-2.25-2.25l2.25 2.25l-2.25 2.25");
}
</style><path class="eajkh3y6s"/>`,
		"fallback": "uix-sharp:leave-home",
	});
}

export default Component;
