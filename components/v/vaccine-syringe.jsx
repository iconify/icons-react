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
		"content": `<style>.waivnrbzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.227 8.288l1.061-1.061a1.75 1.75 0 0 1 2.475 0l4.596 4.596a1.75 1.75 0 0 1 0 2.475l-1.061 1.061a1.75 1.75 0 0 1-2.475 0l-4.596-4.596a1.75 1.75 0 0 1 0-2.475m-2.298 2.298l5.657-5.657m-5.304.353l2.475 2.475m-3.889-1.06l2.829-2.829m8.131 10.96l3.89 3.89M8.111 11.646l1.414-1.414m.707 3.536l1.414-1.414");
}
</style><path class="waivnrbzz"/>`,
		"fallback": "uix:vaccine-syringe",
	});
}

export default Component;
