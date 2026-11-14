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
		"content": `<style>.tf-nehcvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18.5c4 0 4.5-10 7.5-10h4c3 0 3.5 10 7.5 10ZM10 5.75h4");
}
</style><path class="tf-nehcvq"/>`,
		"fallback": "uix:pitchers-mound",
	});
}

export default Component;
