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
		"content": `<style>.ywtgnrbdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 5.072za2.25 2.25 0 0 1 .824 3.073l-5.75 9.96A2.25 2.25 0 0 1 8 18.928a2.25 2.25 0 0 1-.824-3.073l5.75-9.96A2.25 2.25 0 0 1 16 5.072m-3.248-1.875l6.496 3.75m-9.947 5.227l3.898 2.25");
}
</style><path class="ywtgnrbdb"/>`,
		"fallback": "uix:test-tube",
	});
}

export default Component;
