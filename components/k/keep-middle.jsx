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
		"content": `<style>.l9rwhwlka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20.5V4M9.25 6.75L12 4l2.75 2.75M3 21l1.5-6.5m1-4L7 4m14 17l-1.5-6.5m-1-4L17 4");
}
</style><path class="l9rwhwlka"/>`,
		"fallback": "uix:keep-middle",
	});
}

export default Component;
