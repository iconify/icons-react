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
		"content": `<style>.ifyhx9bjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c.5 5.75 2.75 8.75 7.5 9.5c-4.75.75-7 3.75-7.5 9.5c-.5-5.75-2.75-8.75-7.5-9.5c4.75-.75 7-3.75 7.5-9.5");
}
</style><path class="ifyhx9bjs"/>`,
		"fallback": "uix:sparkle",
	});
}

export default Component;
