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
		"content": `<style>.nui4i0bcr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 9a2.75 2.75 0 1 0 5.5 0A2.75 2.75 0 1 0 2 9Zm0 9c0-2.5 1.25-3.75 2.75-3.75S7.5 15.5 7.5 18Zm14.5-9A2.75 2.75 0 1 0 22 9a2.75 2.75 0 1 0-5.5 0Zm0 9c0-2.5 1.25-3.75 2.75-3.75S22 15.5 22 18ZM12.941 6.416a2.75 2.75 0 0 1 1.643 1.643m0 1.882a2.75 2.75 0 0 1-1.643 1.643m-1.882 0a2.75 2.75 0 0 1-1.643-1.643m0-1.882a2.75 2.75 0 0 1 1.643-1.643M9.25 18c0-1.5.5-2.75 1.25-3.25m3 0c.75.5 1.25 1.75 1.25 3.25M11 18h2");
}
</style><path class="nui4i0bcr"/>`,
		"fallback": "uix-sharp:leave-calendar",
	});
}

export default Component;
