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
		"content": `<style>.jwubodd9p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h19L19 13H5Zm3 0V4h5v4m8.5 5v6a2 2 0 0 1-4 0v-1.5");
}
</style><path class="jwubodd9p"/>`,
		"fallback": "uix:longliner",
	});
}

export default Component;
