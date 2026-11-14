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
		"content": `<style>.y82e-2bnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4.5h.5A1.75 1.75 0 0 1 6.5 6.25v11.5a1.75 1.75 0 0 1-1.75 1.75h-.5a1.75 1.75 0 0 1-1.75-1.75V6.25A1.75 1.75 0 0 1 4.25 4.5M6.5 9h13l2-2.5M6.5 15l7-6");
}
</style><path class="y82e-2bnk"/>`,
		"fallback": "uix:peg-hook",
	});
}

export default Component;
