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
		"content": `<style>.urbtq_54r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 19.5l15-15m-12 12q3 0 3 3q-3 0-3-3m4-4q3 0 3 3q-3 0-3-3m4-4q3 0 3 3q-3 0-3-3m-8 8q-3 0-3-3q3 0 3 3m4-4q-3 0-3-3q3 0 3 3m4-4q-3 0-3-3q3 0 3 3");
}
</style><path class="urbtq_54r"/>`,
		"fallback": "uix:thyme-sprig",
	});
}

export default Component;
