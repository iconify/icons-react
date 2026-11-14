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
		"content": `<style>.a4zijekfk {
  d: path("M2.5 17.5H8v-11h7v11h6.5");
}

.h46uk_brq {
  d: path("m19.25 15.25l2.25 2.25l-2.25 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a4zijekfk"/><path class="h46uk_brq"/></g>`,
		"fallback": "uix-sharp:wave-pulse",
	});
}

export default Component;
