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
		"content": `<style>.eclq2vbmh {
  d: path("M3.5 13.25a8.5 8.5 0 0 1 17 0M12 4.75v8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jue--d_rz {
  d: path("m6 7.25l6 6l6-6M2.5 17.75q2.375-2.5 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><g class="hntgybcog"><path class="eclq2vbmh"/><path class="jue--d_rz"/></g>`,
		"fallback": "uix:run-of-river",
	});
}

export default Component;
