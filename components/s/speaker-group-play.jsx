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
		"content": `<style>.bw0lulbry {
  d: path("M2.5 2.5H10v17H2.5Zm10.5 7v-7h7.5V14");
}

.g5or7jbgc {
  d: path("M5 9.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm10.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm0 4.75L21.75 18l-6.25 3.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bw0lulbry"/><path class="g5or7jbgc"/></g>`,
		"fallback": "uix-sharp:speaker-group-play",
	});
}

export default Component;
