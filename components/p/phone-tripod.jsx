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
		"content": `<style>.i7kvnp3nj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v9.5H3Zm2.5 18.5L12 15l6.5 6.5m-6.5-9v9M6 7.75h.01");
}
</style><path class="i7kvnp3nj"/>`,
		"fallback": "uix-sharp:phone-tripod",
	});
}

export default Component;
