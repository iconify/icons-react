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
		"content": `<style>.iuac1wdfc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0M2.5 21v-4a4.5 4.5 0 0 1 9 0v4m3-3.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M18.75 16l2.75-2.75m-3 0h3v3");
}
</style><path class="iuac1wdfc"/>`,
		"fallback": "uix:person-male",
	});
}

export default Component;
