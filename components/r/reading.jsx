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
		"content": `<style>.s4alc1b0b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M12 13q-3.75-2.25-9-1.5v8q5.25-.75 9 1.5q3.75-2.25 9-1.5v-8q-5.25-.75-9 1.5m0 0v8");
}
</style><path class="s4alc1b0b"/>`,
		"fallback": "uix:reading",
	});
}

export default Component;
