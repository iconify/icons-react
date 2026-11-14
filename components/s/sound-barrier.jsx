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
		"content": `<style>.n127r3r4e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.25 2.5h1.5a1.75 1.75 0 0 1 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1-1.75-1.75V4.25a1.75 1.75 0 0 1 1.75-1.75M4.214 8.17a5 5 0 0 1 0 7.66M7.106 4.723a9.5 9.5 0 0 1 0 14.554");
}
</style><path class="n127r3r4e"/>`,
		"fallback": "uix:sound-barrier",
	});
}

export default Component;
