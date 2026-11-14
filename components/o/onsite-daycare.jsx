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
		"content": `<style>.i6culxb7y {
  d: path("m14.5 9.5l2-5C17 3.5 18 3 19 3.25l2.25 2.25c.25.5 0 1.25-.75 1.25h-2l-1.25 3M3 18.5c4 2.5 14 2.5 18 0M8 14l-1.25 5.25M14.5 14l1.25 5.25M6 11l-2.5 2.5");
}

.lczvimtfk {
  d: path("M6 9.5h10.5V14H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lczvimtfk"/><path class="i6culxb7y"/></g>`,
		"fallback": "uix-sharp:onsite-daycare",
	});
}

export default Component;
