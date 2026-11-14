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
		"content": `<style>.g6zfbgbzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5l5.5 2.75l1 4.75l-4 .5v10h-11V11l-4-.5l1-4.75Zm3 2.5V9m-5.5 5h11");
}
</style><path class="g6zfbgbzn"/>`,
		"fallback": "uix:rugby-jersey",
	});
}

export default Component;
