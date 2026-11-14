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
		"content": `<style>.vzrltu0cj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5a2 2 0 0 1 3.5 0a2 2 0 0 1 3.75 0a2 2 0 0 1 3.5 0a2 2 0 0 1 3.75 0A2 2 0 0 1 21 5c0 4.5-6.75 5.5-7.5 10.5h-3C9.75 10.5 3 9.5 3 5Zm9 10.5v6M12 8v3.5m0 9.25c1-2 3-2.75 5.5-2.5c-.5 2-2.5 2.75-5.5 2.5Z");
}
</style><path class="vzrltu0cj"/>`,
		"fallback": "uix-sharp:petunia",
	});
}

export default Component;
