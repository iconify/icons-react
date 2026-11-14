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
		"content": `<style>.zq1-6ynbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.688 3.5h10.625A2.19 2.19 0 0 1 19.5 5.688v.125A2.19 2.19 0 0 1 17.313 8H6.688A2.19 2.19 0 0 1 4.5 5.813v-.125A2.19 2.19 0 0 1 6.688 3.5M12 8v13m-1.5-8h3m-3 3h3m-3 3h3");
}
</style><path class="zq1-6ynbm"/>`,
		"fallback": "uix:safety-razor",
	});
}

export default Component;
