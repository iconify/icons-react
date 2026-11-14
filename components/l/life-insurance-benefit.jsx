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
		"content": `<style>.h55atjxzs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5a9.5 7 0 0 1 19 0c-1-1-3.25-1-4.25 0c-1-1-4.25-1-5.25 0c-1-1-4.25-1-5.25 0c-1-1-3.25-1-4.25 0M12 21c-3.5-2-4.5-4-4.5-5.75c0-1.5 1-2.5 2.25-2.5c1 0 1.75.5 2.25 1.25c.5-.75 1.25-1.25 2.25-1.25c1.25 0 2.25 1 2.25 2.5C16.5 17 15.5 19 12 21");
}
</style><path class="h55atjxzs"/>`,
		"fallback": "uix:life-insurance-benefit",
	});
}

export default Component;
