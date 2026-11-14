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
		"content": `<style>.o-aj7017n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5.5h6L9 8.75L10.5 12L9 15.25l1.5 3.25h-6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2m9.25 0l-1.5 3.25l1.5 3.25l-1.5 3.25l1.5 3.25h5.75a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Z");
}
</style><path class="o-aj7017n"/>`,
		"fallback": "uix:jump-cut",
	});
}

export default Component;
