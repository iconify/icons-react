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
		"content": `<style>.cmiuq-bxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 9.5C4.5 5.5 8 3.25 12 3.25s7.5 2.25 8.75 6.25Zm8.75 0v5.75m-4.75 0h9.5m-8.25 0l-1 6m8-6l1 6");
}
</style><path class="cmiuq-bxx"/>`,
		"fallback": "iconoven:patio",
	});
}

export default Component;
