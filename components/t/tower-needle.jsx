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
		"content": `<style>.whv-2cb1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21V9M8 21l4-9l4 9M7.5 8a4.5 2 0 1 0 9 0a4.5 2 0 1 0-9 0M12 6V3");
}
</style><path class="whv-2cb1n"/>`,
		"fallback": "uix:tower-needle",
	});
}

export default Component;
