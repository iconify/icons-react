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
		"content": `<style>.g4em8lqld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 7.25h10.5v13.5H6.75zm2.75 0v-4.5m5 4.5v-1.5M9.75 11h4.5m-4.5 2.5h4.5M9.75 16h4.5");
}
</style><path class="g4em8lqld"/>`,
		"fallback": "iconoven:walkie-talkie-sharp",
	});
}

export default Component;
