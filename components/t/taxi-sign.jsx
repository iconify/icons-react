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
		"content": `<style>.mafkjmbbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 7.5h6.5q1.25 0 1.46 1.23l.83 4.79q.21 1.23-1.04 1.23h-9q-1.25 0-1.04-1.23l.83-4.79Q7.5 7.5 8.75 7.5m-2 4h10.5m-7.75 0v3.25M12 11.5v3.25m2.5-3.25v3.25m-11 5.75c2-3.5 15-3.5 17 0");
}
</style><path class="mafkjmbbe"/>`,
		"fallback": "iconoven:taxi-sign",
	});
}

export default Component;
