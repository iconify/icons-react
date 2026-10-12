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
		"content": `<style>.vp2gs8ugg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4.25h10a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-4l-1 9.6a1 1 0 0 1-1 .9H5.9a1 1 0 0 1-1-1.1l.85-9.4h-1a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2m14.5.5l2-1.25m-2 4h2m-2 2.75l2 1.25");
}
</style><path class="vp2gs8ugg"/>`,
		"fallback": "iconoven:scan-gun",
	});
}

export default Component;
