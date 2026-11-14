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
		"content": `<style>.fnyz5ssji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h11A3.5 3.5 0 0 1 21 6v12a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18V6a3.5 3.5 0 0 1 3.5-3.5M3 12h18M7 12V5.5m3.5 6.5V6.5M14 12l2.75-6M7.5 21.5V15m3.5 6.5V16m3.5 5.5V15");
}
</style><path class="fnyz5ssji"/>`,
		"fallback": "uix:public-library-shelf",
	});
}

export default Component;
