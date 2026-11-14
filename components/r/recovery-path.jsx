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
		"content": `<style>.val1jn_gl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h5v-5h5v-5h9m-7-6a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><path class="val1jn_gl"/>`,
		"fallback": "uix:recovery-path",
	});
}

export default Component;
