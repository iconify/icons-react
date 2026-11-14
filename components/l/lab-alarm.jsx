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

.ww07s6b7l {
  d: path("M15 6V3h2v4.75M8.75 7.5V10l-2.5 4h7l-2.5-4V7.5m4.5 12.25h6.5l-1-1.5v-1.5a2.25 2.25 0 0 0-4.5 0v1.5Zm2.5 2h1.5");
}

.xthhtrk6x {
  d: path("M12.06 19.5H3v-10l8-7l8 7v2.24");
}
</style><g class="ulnmmdpxh"><path class="xthhtrk6x"/><path class="ww07s6b7l"/></g>`,
		"fallback": "uix-sharp:lab-alarm",
	});
}

export default Component;
