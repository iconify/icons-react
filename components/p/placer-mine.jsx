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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ump7scc-c {
  d: path("M8.25 14.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm5.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM11 10.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.v20idkbkv {
  d: path("M2.5 6h2c1 8.5 3 12 7.5 12s6.5-3.5 7.5-12h2");
}
</style><g class="ulnmmdpxh"><path class="v20idkbkv"/><path class="ump7scc-c"/></g>`,
		"fallback": "uix-sharp:placer-mine",
	});
}

export default Component;
