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
		"content": `<style>.ol7_s_biz {
  d: path("M8.75 9L13 12.25L8.75 15.5Zm6.75 9.5h6M19 16l2.5 2.5L19 21");
}

.tdb6cwbyh {
  d: path("M12.7 20.5H4.5v-18H16v12.6M9 5.5h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tdb6cwbyh"/><path class="ol7_s_biz"/></g>`,
		"fallback": "uix-sharp:swipe-to-play",
	});
}

export default Component;
