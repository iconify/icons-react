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
		"content": `<style>.cihsvz7ao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m12.75-4h4a1.75 1.75 0 0 1 1.75 1.75v4A1.75 1.75 0 0 1 19.75 11h-4A1.75 1.75 0 0 1 14 9.25v-4a1.75 1.75 0 0 1 1.75-1.75m-2.513 10.237l2.026 2.026a1.75 1.75 0 0 1 0 2.474l-2.026 2.026a1.75 1.75 0 0 1-2.474 0l-2.026-2.026a1.75 1.75 0 0 1 0-2.474l2.026-2.026a1.75 1.75 0 0 1 2.474 0");
}
</style><path class="cihsvz7ao"/>`,
		"fallback": "uix:piste-difficulty",
	});
}

export default Component;
