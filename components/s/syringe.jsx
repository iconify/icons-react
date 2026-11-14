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
		"content": `<style>.ma7rvfnnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.712 7.227l1.061 1.061a1.75 1.75 0 0 1 0 2.475l-4.596 4.596a1.75 1.75 0 0 1-2.475 0l-1.061-1.061a1.75 1.75 0 0 1 0-2.475l4.596-4.596a1.75 1.75 0 0 1 2.475 0m-2.298-2.298l5.657 5.657m-.353-5.304l-2.475 2.475m1.06-3.889l2.829 2.829m-10.96 8.131l-3.89 3.89m7.072-10.607l1.414 1.414m-3.536.707l1.414 1.414");
}
</style><path class="ma7rvfnnm"/>`,
		"fallback": "uix:syringe",
	});
}

export default Component;
