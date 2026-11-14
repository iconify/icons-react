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
		"content": `<style>.uop_b-lur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19m1.75-16h14a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 18.75 9h-14A1.75 1.75 0 0 1 3 7.25A1.75 1.75 0 0 1 4.75 5.5M4.5 9h6.379a1.5 1.5 0 0 1 1.06 2.561l-6.378 6.378A1.5 1.5 0 0 1 3 16.879V10.5A1.5 1.5 0 0 1 4.5 9");
}
</style><path class="uop_b-lur"/>`,
		"fallback": "uix:shelf-bracket",
	});
}

export default Component;
