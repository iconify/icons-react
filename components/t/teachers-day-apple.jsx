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
		"content": `<style>.l5jjxhb4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.5c-2-2-8.5-2-8.5 4c0 5.5 4 9 6.5 9c1 0 1.25-.5 2-.5s1 .5 2 .5c2.5 0 6.5-3.5 6.5-9c0-6-6.5-6-8.5-4Zm0 0v-5m0 1.25C13 3 15.25 2.5 17.5 3c-.75 1.5-3 2.25-5.5 1.75Z");
}
</style><path class="l5jjxhb4x"/>`,
		"fallback": "uix-sharp:teachers-day-apple",
	});
}

export default Component;
