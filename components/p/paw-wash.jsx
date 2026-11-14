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
		"content": `<style>.z2tv12bhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 15.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4-4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM8 19c0-2.25 2-3.5 4-3.5s4 1.25 4 3.5c0 2-2 2.5-4 2c-2 .5-4 0-4-2ZM5.5 2.5S4 4.5 4 5.5a1.5 1.5 0 0 0 3 0c0-1-1.5-3-1.5-3Zm6.5 0s-1.5 2-1.5 3a1.5 1.5 0 0 0 3 0c0-1-1.5-3-1.5-3Zm6.5 0s-1.5 2-1.5 3a1.5 1.5 0 0 0 3 0c0-1-1.5-3-1.5-3Z");
}
</style><path class="z2tv12bhv"/>`,
		"fallback": "uix-sharp:paw-wash",
	});
}

export default Component;
