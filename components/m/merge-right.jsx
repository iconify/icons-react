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
		"content": `<style>.vr3-nwbet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21V3.5m-4 4l4-4l4 4M17.5 21v-3.5q0-4.5-7.5-6.5");
}
</style><path class="vr3-nwbet"/>`,
		"fallback": "uix-sharp:merge-right",
	});
}

export default Component;
