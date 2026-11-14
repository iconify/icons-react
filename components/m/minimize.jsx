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
		"content": `<style>.bt5_lerhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.5 4.5l-6 6m0-5.5v5.5H19m-14.5 9l6-6m0 5.5v-5.5H5");
}
</style><path class="bt5_lerhg"/>`,
		"fallback": "uix:minimize",
	});
}

export default Component;
