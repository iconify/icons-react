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
		"content": `<style>.u4nn6zbtq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4c2.75 0 4 2 4 3.75c0 1.25-1.25 2-1.5 2.75c.25.75 1.5 1.5 1.5 2.75C14 15 12.75 17 10 17s-4-2-4-3.75c0-1.25 1.25-2 1.5-2.75C7.25 9.75 6 9 6 7.75C6 6 7.25 4 10 4m5.949 14.786l.732-1.351a1.5 1.5 0 0 1 2.638 0l.732 1.351A1.5 1.5 0 0 1 18.732 21h-1.464a1.5 1.5 0 0 1-1.319-2.214");
}
</style><path class="u4nn6zbtq"/>`,
		"fallback": "uix:peanut-allergy",
	});
}

export default Component;
