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
		"content": `<style>.pq6c9db1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 9a3.5 3.5 0 0 0 7 0V8c0-2-1.5-3.5-3.25-3.5l-.75.75l-.25-.25C9.75 5 8.5 6.25 8.5 8Zm-2 11.25h11a.75.75 0 0 0 .75-.75c0-2-2.8-3.75-6.25-3.75S5.75 17.5 5.75 19.5a.75.75 0 0 0 .75.75");
}
</style><path class="pq6c9db1k"/>`,
		"fallback": "iconoven:man",
	});
}

export default Component;
