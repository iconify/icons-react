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
		"content": `<style>.xhx4hlgwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.947 5.62l-4.231 5.171A1.659 1.659 0 0 0 8 13.5h1.518a1.75 1.75 0 0 1 1.736 1.967L11 17.5a1.162 1.162 0 0 0 2.053.88l4.231-5.171A1.659 1.659 0 0 0 16 10.5h-1.518a1.75 1.75 0 0 1-1.736-1.967L13 6.5a1.162 1.162 0 0 0-2.053-.88");
}
</style><path class="xhx4hlgwh"/>`,
		"fallback": "uix:lightning-bolt",
	});
}

export default Component;
