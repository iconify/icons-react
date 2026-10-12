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
		"content": `<style>.kkc61bb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 3.25h16.5V14.5H3.75zm3.5 4h5m-5 3h3M6.5 17h12l.38.92l.99 2.41l.38.92H3.75l.38-.92l.99-2.41l.38-.92z");
}
</style><path class="kkc61bb7x"/>`,
		"fallback": "iconoven:smart-display-sharp",
	});
}

export default Component;
