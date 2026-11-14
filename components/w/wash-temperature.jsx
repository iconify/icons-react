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
		"content": `<style>.fxa26w3vc {
  d: path("M16 9.5q2.5 1.5 5 0m-10.25 3V4.25a1.25 1.25 0 0 1 2.5 0v8.25a2.75 2.75 0 1 1-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vm8ox1new {
  d: path("m3 9.5l2.25 11h13.5L21 9.5m-18 0q2.5-1.5 5 0");
}
</style><g class="ulnmmdpxh"><path class="vm8ox1new"/><path class="fxa26w3vc"/></g>`,
		"fallback": "uix-sharp:wash-temperature",
	});
}

export default Component;
