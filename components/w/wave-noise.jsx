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
		"content": `<style>.r1nzmubfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11L5 6l2.5 10L10 4l2.5 10.5l2.5-8L17.5 17L20 8l1.5 3m-19 9.5h19");
}
</style><path class="r1nzmubfa"/>`,
		"fallback": "uix:wave-noise",
	});
}

export default Component;
