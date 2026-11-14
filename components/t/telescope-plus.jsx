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
		"content": `<style>.ta9uzgzdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.838 9.891l10.422-4.86a2.25 2.25 0 0 1 2.99 1.088a2.25 2.25 0 0 1-1.088 2.99L6.74 13.969a2.25 2.25 0 0 1-2.99-1.088a2.25 2.25 0 0 1 1.088-2.99M11 12l-4.5 9m4.5-9l1.258 5.662m.412 1.855L13 21m5-6v6m-3-3h6");
}
</style><path class="ta9uzgzdj"/>`,
		"fallback": "uix:telescope-plus",
	});
}

export default Component;
