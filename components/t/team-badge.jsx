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
		"content": `<style>.kr6grkbdu {
  d: path("m12 2.5l7.5 3V11c0 5-3.5 8.5-7.5 10.5c-4-2-7.5-5.5-7.5-10.5V5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y5hh2fbrb {
  d: path("m12 7.75l1 2.5h2.5l-2 1.75l.75 2.5L12 13l-2.25 1.5l.75-2.5l-2-1.75H11Z");
}
</style><g class="ulnmmdpxh"><path class="kr6grkbdu"/><path class="y5hh2fbrb"/></g>`,
		"fallback": "uix-sharp:team-badge",
	});
}

export default Component;
