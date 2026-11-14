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
		"content": `<style>.j8ui1dbhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c1.5-4.5 5-7 8.5-7s7 2.5 8.5 7Zm10-7L19 5m-1.25-1l2.5 2");
}
</style><path class="j8ui1dbhc"/>`,
		"fallback": "uix:soil-pile",
	});
}

export default Component;
