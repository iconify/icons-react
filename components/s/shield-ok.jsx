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
		"content": `<style>.bhlsk7b0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l7.5 2.75v6.75H14a2 2 0 0 0-2 2v7C7.6 19.5 4.5 16.2 4.5 11.5v-6ZM14.75 18l2 2L21 15.75");
}
</style><path class="bhlsk7b0y"/>`,
		"fallback": "uix:shield-ok",
	});
}

export default Component;
