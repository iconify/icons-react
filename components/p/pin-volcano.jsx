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
		"content": `<style>.mvjokqouf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 20.5l6-10.5h7l6 10.5ZM12 3v4.25m-3.25 0L6.75 4m8.5 3.25l2-3.25");
}
</style><path class="mvjokqouf"/>`,
		"fallback": "uix-sharp:pin-volcano",
	});
}

export default Component;
