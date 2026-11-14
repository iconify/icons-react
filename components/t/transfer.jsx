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
		"content": `<style>.ixbudcbtm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7.5h15M16 4l3.5 3.5L16 11m3.5 5.5h-15M8 13l-3.5 3.5L8 20");
}
</style><path class="ixbudcbtm"/>`,
		"fallback": "uix:transfer",
	});
}

export default Component;
