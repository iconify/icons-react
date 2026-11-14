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
		"content": `<style>.e7wf9wioz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.741 14.5h8.518a1.75 1.75 0 0 1 1.697 2.174l-.875 3.5a1.75 1.75 0 0 1-1.697 1.326H8.616a1.75 1.75 0 0 1-1.697-1.326l-.875-3.5A1.75 1.75 0 0 1 7.741 14.5m4.259 0V6m0 0c-2.5-2.5-6.5-2.5-9 .5m9-.5c2.5-2.5 6.5-2.5 9 .5M12 6c-3.5.5-6 2.5-7 5.5M12 6c3.5.5 6 2.5 7 5.5");
}
</style><path class="e7wf9wioz"/>`,
		"fallback": "uix:potted-palm",
	});
}

export default Component;
