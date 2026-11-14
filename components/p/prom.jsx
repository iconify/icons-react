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
		"content": `<style>.amglwvl1j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6.5q2.5 1.5 5 0l-1 4.5q2 5.5 6 8.75q-7.5 3-15 0q4-3.25 6-8.75Zm0 0L9.75 3m4.75 3.5L14.25 3m-3.75 8h3M19 2.75Q19 5 21.25 5Q19 5 19 7.25Q19 5 16.75 5Q19 5 19 2.75Z");
}
</style><path class="amglwvl1j"/>`,
		"fallback": "uix-sharp:prom",
	});
}

export default Component;
