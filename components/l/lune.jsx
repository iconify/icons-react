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
		"content": `<style>.lk885zbbf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.72 5.54a8 8 0 1 0 0 12.92a6.5 6.5 0 1 1 0-12.92");
}
</style><path class="lk885zbbf"/>`,
		"fallback": "iconoven:lune",
	});
}

export default Component;
