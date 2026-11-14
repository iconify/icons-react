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
		"content": `<style>.leu_qlbix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.272 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c2.002 0 3.783.499 5.106 1.368M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8.25 11l2 2L21 15.75");
}
</style><path class="leu_qlbix"/>`,
		"fallback": "uix:lead-qualified",
	});
}

export default Component;
