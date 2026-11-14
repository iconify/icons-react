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
		"content": `<style>.kom6y3b-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0m-11.5 15V16c0-1.75 1.5-2.5 1.5-3.5v-1h2v1c0 1 1.5 1.75 1.5 3.5v5.5Zm0-3.25h5M11 13.5h2");
}
</style><path class="kom6y3b-k"/>`,
		"fallback": "uix-sharp:liquor-store",
	});
}

export default Component;
