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
		"content": `<style>.ow15mziae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6c-2-1.5-5.5-2-9-1.5V19c3.5-.5 7 0 9 1.5M12 6c2-1.5 5.5-2 9-1.5V19c-3.5-.5-7 0-9 1.5M12 6v14.5");
}
</style><path class="ow15mziae"/>`,
		"fallback": "uix:scripture-book-open",
	});
}

export default Component;
