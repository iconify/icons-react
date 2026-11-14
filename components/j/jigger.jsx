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
		"content": `<style>.g9khv1hcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.864 2.5h6.272a1.5 1.5 0 0 1 1.358 2.139l-2.783 5.913a1.5 1.5 0 0 0-.114.933l1.544 7.721A1.5 1.5 0 0 1 13.67 21h-3.34a1.5 1.5 0 0 1-1.471-1.794l1.544-7.721a1.5 1.5 0 0 0-.114-.933L7.506 4.639A1.5 1.5 0 0 1 8.864 2.5M9.75 11h4.5m-6-4.5h7.5");
}
</style><path class="g9khv1hcg"/>`,
		"fallback": "uix:jigger",
	});
}

export default Component;
