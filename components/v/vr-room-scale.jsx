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
		"content": `<style>.mr0qe6qtv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4L13.5 10h-3L9 11.5H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2M9 15H6l-.75 2M15 15h3l.75 2m-15 1.5l-.75 2h5m12.25-2l.75 2h-5");
}
</style><path class="mr0qe6qtv"/>`,
		"fallback": "uix:vr-room-scale",
	});
}

export default Component;
