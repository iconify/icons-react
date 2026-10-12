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
		"content": `<style>.mq467ok5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.25q9.25-2.75 18.5 0v9.5Q12 12 2.75 14.75ZM12 13.5v6.75m-3.75 0h7.5");
}
</style><path class="mq467ok5q"/>`,
		"fallback": "iconoven:monitor-curved",
	});
}

export default Component;
