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
		"content": `<style>.i0hlktbga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5V3M9.25 5.75L12 3l2.75 2.75M12 17l-7-7m3.5 0H5v3.5m7 3.5l7-7m-3.5 0H19v3.5");
}
</style><path class="i0hlktbga"/>`,
		"fallback": "uix:lane-guidance",
	});
}

export default Component;
