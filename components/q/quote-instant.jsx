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
		"content": `<style>.ccduxvbuw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3h10.5A1.75 1.75 0 0 1 19 4.75v5.75a1.75 1.75 0 0 1-1.75 1.75H14A1.75 1.75 0 0 0 12.25 14v4.043a1.21 1.21 0 0 1-1.75 1.082l-.941-.471a1.75 1.75 0 0 0-1.607.021l-1.077.575A1.275 1.275 0 0 1 5 18.125V4.75A1.75 1.75 0 0 1 6.75 3M8.5 6.5h7m-7 3h7M19 15l-2.5 3.25h3L17 21");
}
</style><path class="ccduxvbuw"/>`,
		"fallback": "uix:quote-instant",
	});
}

export default Component;
