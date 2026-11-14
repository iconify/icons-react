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
		"content": `<style>.ac8f7yb5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 11.5h10.5v9H11ZM3.25 19a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM11 13.5L4.5 5h-2M15 11.5L16.5 7H19m-2-3.5h.01M20 3h.01m1.74 2.75h.01");
}
</style><path class="ac8f7yb5l"/>`,
		"fallback": "uix-sharp:snow-blower",
	});
}

export default Component;
