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
		"content": `<style>.dpq5iqb-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 9.5h12.5v5H9ZM2.5 12H9m-4 0v9.5m6.75-12L9.5 4l3-.5l2 6Z");
}
</style><path class="dpq5iqb-l"/>`,
		"fallback": "uix-sharp:scooter-throttle",
	});
}

export default Component;
