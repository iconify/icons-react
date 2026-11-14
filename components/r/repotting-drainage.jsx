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
		"content": `<style>.izgu3acfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16l-2.5 13h-11Zm.75 4h14.5M8.5 18.5v3m3.5-3v3m3.5-3v3");
}
</style><path class="izgu3acfo"/>`,
		"fallback": "uix-sharp:repotting-drainage",
	});
}

export default Component;
