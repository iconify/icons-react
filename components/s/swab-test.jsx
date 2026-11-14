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
		"content": `<style>.ixwq8c4oz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.328 5.672za2 2 0 0 1 0 2.828L15.5 11.328a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828L15.5 5.672a2 2 0 0 1 2.828 0M13 11l-8 8");
}
</style><path class="ixwq8c4oz"/>`,
		"fallback": "uix:swab-test",
	});
}

export default Component;
