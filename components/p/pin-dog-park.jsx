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
		"content": `<style>.vz9v16zuf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 7.75a3 3 0 1 1 4.75-2a3 3 0 1 1-2 4.75l-5.75 5.75a3 3 0 1 1-4.75 2a3 3 0 1 1 2-4.75Z");
}
</style><path class="vz9v16zuf"/>`,
		"fallback": "uix:pin-dog-park",
	});
}

export default Component;
