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
		"content": `<style>.ocu9jvhyh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7q7.5-3.5 15 0v7c0 4.5-3.5 7.5-7.5 7.5s-7.5-3-7.5-7.5Zm3 3.5h9m-9 4h9M4.5 7L3 2.5M19.5 7L21 2.5");
}
</style><path class="ocu9jvhyh"/>`,
		"fallback": "uix:kendo-do",
	});
}

export default Component;
