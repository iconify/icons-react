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
		"content": `<style>.rmlkx2lqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.151 7.465l3.359 2.399a2.625 2.625 0 0 1 0 4.272l-3.359 2.399A2.625 2.625 0 0 1 5 14.399V9.601a2.625 2.625 0 0 1 4.151-2.136M19 4.5v15");
}
</style><path class="rmlkx2lqb"/>`,
		"fallback": "uix:test-skip",
	});
}

export default Component;
