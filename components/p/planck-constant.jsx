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
		"content": `<style>.c3mpicc3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3v18m0-8.5c0-2.5 2-3.75 4.5-3.75s4 1.5 4 4V21M6 5.5h7.5");
}
</style><path class="c3mpicc3j"/>`,
		"fallback": "uix:planck-constant",
	});
}

export default Component;
