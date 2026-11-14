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
		"content": `<style>.lja2rfb8l {
  d: path("M4.75 14h2l1-2l1.75 4l1-2h1.75m1-4.75C14.5 5.5 17.5 3 20 4.25c2 1 1 4.25-1.5 4.25c-2 0-1.75-2.5 0-2.25");
}

.tv2f_db3u {
  d: path("M5 8h7a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 12 20H5a2.5 2.5 0 0 1-2.5-2.5v-7A2.5 2.5 0 0 1 5 8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tv2f_db3u"/><path class="lja2rfb8l"/></g>`,
		"fallback": "uix-sharp:pacemaker",
	});
}

export default Component;
