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
		"content": `<style>.hoaym3bgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5c0-3 2.9-5 6.5-5s6.5 2 6.5 5c0 .6-.4 1-1 1h-11c-.6 0-1-.4-1-1ZM5.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM16 4.5a3.5 3.5 0 0 1 .906 6.881M18.5 15c1.8.8 3 2.4 3 4.5");
}
</style><path class="hoaym3bgc"/>`,
		"fallback": "uix-sharp:users",
	});
}

export default Component;
