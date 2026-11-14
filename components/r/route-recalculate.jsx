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
		"content": `<style>.f3rabib1x {
  d: path("M5 16v-6a3 3 0 0 1 3-3h7.5m0 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm2.5 7.75a3.25 3.25 0 1 0 2.75 1.5");
}

.f9_duu-ju {
  d: path("M16.75 13.5L18 14.75L16.75 16");
}

.jk9vx52lc {
  d: path("M2.5 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jk9vx52lc"/><path class="f3rabib1x"/><path class="f9_duu-ju"/></g>`,
		"fallback": "uix-sharp:route-recalculate",
	});
}

export default Component;
