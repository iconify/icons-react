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
		"content": `<style>.o64_qibza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 6.5h10.25a4.375 4.375 0 0 1 4.375 4.375v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 15.125v-4.25A4.375 4.375 0 0 1 6.875 6.5m2.625-3h5m-9 9.5H9m6 0h3.5M12 11.25h.01m-.01 3.5h.01");
}
</style><path class="o64_qibza"/>`,
		"fallback": "uix:timer-lab",
	});
}

export default Component;
