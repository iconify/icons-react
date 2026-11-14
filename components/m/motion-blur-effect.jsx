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
		"content": `<style>.d2h4tesom {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M2.5 9H7m-4.5 3h4m-4 3H7");
}
</style><path class="d2h4tesom"/>`,
		"fallback": "uix:motion-blur-effect",
	});
}

export default Component;
