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
		"content": `<style>.opiwwob5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 11.75h14.5q1.25 0 1.25 1.25v4.25q0 1.25-1.25 1.25h-1.5q-1.25 0-1.25 1.25V20q0 1.25-1.25 1.25h-6.5Q7.5 21.25 7.5 20v-.25q0-1.25-1.25-1.25h-1.5q-1.25 0-1.25-1.25V13q0-1.25 1.25-1.25M8 14v2m2.67-2v2m2.66-2v2M16 14v2M9.7 7.95a3.25 3.25 0 0 1 4.6 0m-6.9-2.3a6.5 6.5 0 0 1 9.2 0");
}
</style><path class="opiwwob5b"/>`,
		"fallback": "iconoven:open-port",
	});
}

export default Component;
