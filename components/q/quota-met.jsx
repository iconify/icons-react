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
		"content": `<style>.rx7_hrbjv {
  d: path("M8.75 14.75L7.5 21.5l4.5-2.25l4.5 2.25l-1.25-6.75M9 9l2.25 2.25l3.75-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwz9jvx6z {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}
</style><g class="ulnmmdpxh"><path class="zwz9jvx6z"/><path class="rx7_hrbjv"/></g>`,
		"fallback": "uix-sharp:quota-met",
	});
}

export default Component;
