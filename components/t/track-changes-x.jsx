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
		"content": `<style>.l7wzbcbnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 5.25h13M7.25 12h5m5.5 0h2.5m-13 6.75h10M3.75 9v6m9.5.5L15.5 11l2.25 4.5");
}
</style><path class="l7wzbcbnm"/>`,
		"fallback": "iconoven:track-changes-x",
	});
}

export default Component;
