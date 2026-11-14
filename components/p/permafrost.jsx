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
		"content": `<style>.qxbtm6bdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19m-19 5h2L6 11.75L7.5 9h3l1.5 2.75L13.5 9h3l1.5 2.75L19.5 9h2m-19 7q4.75-2 9.5 0t9.5 0M7 20h.01M12 20h.01M17 20h.01");
}
</style><path class="qxbtm6bdz"/>`,
		"fallback": "uix:permafrost",
	});
}

export default Component;
