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
		"content": `<style>.g0ug6db_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM3 21.5c0-4.5 2.75-7 6.5-7s6.5 2.5 6.5 7M16.5 5h5v8h-5Zm2.5 8v8.5");
}
</style><path class="g0ug6db_t"/>`,
		"fallback": "uix-sharp:podcast-mic-user",
	});
}

export default Component;
