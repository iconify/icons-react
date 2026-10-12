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
		"content": `<style>.cnk46mrnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13.25H9v-1.5a4.75 4.75 0 1 1 6 0v1.5h2.5m-14.75 5.5h3l1.5-2l2 3.75l2-3.75l2 3.75l2-3.75l1.5 2h3");
}
</style><path class="cnk46mrnn"/>`,
		"fallback": "iconoven:ohm-sign",
	});
}

export default Component;
