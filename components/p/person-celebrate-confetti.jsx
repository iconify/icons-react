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
		"content": `<style>.hcoqdrp1k {
  d: path("M9 8.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm2-6.25h2M3.5 4L5 5.75M20.5 4L19 5.75");
}

.rwss8--hi {
  d: path("m3.5 9.5l4 7.25Q9 14.5 12 14.5t4.5 2.25l4-7.25m-13 7.25v4.75m9-4.75v4.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rwss8--hi"/><path class="hcoqdrp1k"/></g>`,
		"fallback": "uix-sharp:person-celebrate-confetti",
	});
}

export default Component;
