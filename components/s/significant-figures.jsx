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
		"content": `<style>.rx46z9gtr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.5H7l-2 4a3 3 0 1 1-2.25 5M12.5 10l1.75-1.5v10M21 8.5h-3.5l-.25 4.25h1.25a2.75 2.75 0 0 1 0 5.5H17m-7 .25h.01M19.25 5h.01");
}
</style><path class="rx46z9gtr"/>`,
		"fallback": "uix:significant-figures",
	});
}

export default Component;
