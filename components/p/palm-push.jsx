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
		"content": `<style>.ts56y5rfz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8v7.5A5.5 5.5 0 0 0 8 21h1a5.5 5.5 0 0 0 5.5-5.5V7m-9-2v7m3-8.5V12m3-7.5V12m6 0h4.25M19.5 9.75L21.75 12l-2.25 2.25");
}
</style><path class="ts56y5rfz"/>`,
		"fallback": "uix-sharp:palm-push",
	});
}

export default Component;
