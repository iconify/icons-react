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
		"content": `<style>.jey4w3qun {
  d: path("M3 5.5h18V10a2 2 0 0 0 0 4v4.5H3V14a2 2 0 0 0 0-4Z");
}

.sju3b1bxo {
  d: path("m12 8.25l1 2.25l2.75.25l-2 1.75l.5 2.75l-2.25-1.5l-2.25 1.5l.5-2.75l-2-1.75L11 10.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jey4w3qun"/><path class="sju3b1bxo"/></g>`,
		"fallback": "uix-sharp:pin-lottery",
	});
}

export default Component;
