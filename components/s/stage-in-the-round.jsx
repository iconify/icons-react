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
		"content": `<style>.rcrlwe40m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m7.078-8.457a9 9 0 0 1 5.379 5.379m0 6.156a9 9 0 0 1-5.379 5.379m-6.156 0a9 9 0 0 1-5.379-5.379m0-6.156a9 9 0 0 1 5.379-5.379");
}
</style><path class="rcrlwe40m"/>`,
		"fallback": "uix:stage-in-the-round",
	});
}

export default Component;
