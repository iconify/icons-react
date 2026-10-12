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
		"content": `<style>.j4sqsabtm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.36 10.3l2.6-4.5Q12 4 13.04 5.8l2.77 4.8m.56-2.44l-.56 2.44l-2.39-.73m3.6 2.83l2.6 4.5q1.04 1.8-1.04 1.8h-5.54m1.83 1.7L13.04 19l1.83-1.7M10.61 19H5.42q-2.08 0-1.04-1.8l2.77-4.8m-2.39.73l2.39-.73l.56 2.44");
}
</style><path class="j4sqsabtm"/>`,
		"fallback": "iconoven:recycle-loop",
	});
}

export default Component;
