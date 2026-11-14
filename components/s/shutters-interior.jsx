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
		"content": `<style>.jnm90acbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3L3 5v14l4.5 2Zm9 0L21 5v14l-4.5 2ZM3 10h4.5M3 14h4.5m9-4H21m-4.5 4H21");
}
</style><path class="jnm90acbs"/>`,
		"fallback": "uix:shutters-interior",
	});
}

export default Component;
