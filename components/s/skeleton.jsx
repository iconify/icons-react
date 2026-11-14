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
		"content": `<style>.pm8r81bzu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M12 6.5V15m-6-.5L7.5 9h9l1.5 5.5m-8.5-2.75h5m-5 9.75L10 15h4l.5 6.5");
}
</style><path class="pm8r81bzu"/>`,
		"fallback": "uix:skeleton",
	});
}

export default Component;
