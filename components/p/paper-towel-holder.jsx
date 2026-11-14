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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iysj_2bst {
  d: path("M3.5 5v9m0-4.5h8M7 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.veeox7o8p {
  d: path("M11.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8.5 0V21");
}
</style><g class="hntgybcog"><path class="iysj_2bst"/><path class="veeox7o8p"/></g>`,
		"fallback": "uix:paper-towel-holder",
	});
}

export default Component;
