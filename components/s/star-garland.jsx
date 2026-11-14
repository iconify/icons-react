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
		"content": `<style>.nr_b4cbgv {
  d: path("M2.5 7q9.5 6 19 0");
}

.twsvz8vzl {
  d: path("m6 9l.735 1.489l1.643.238l-1.189 1.159l.28 1.637L6 12.75l-1.469.773l.28-1.637l-1.189-1.159l1.643-.238Zm6 1.25l.735 1.489l1.643.238l-1.189 1.159l.28 1.637L12 14l-1.469.773l.28-1.637l-1.189-1.159l1.643-.238ZM18 9l.735 1.489l1.643.238l-1.189 1.159l.28 1.637L18 12.75l-1.469.773l.28-1.637l-1.189-1.159l1.643-.238Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nr_b4cbgv"/><path class="twsvz8vzl"/></g>`,
		"fallback": "uix-sharp:star-garland",
	});
}

export default Component;
