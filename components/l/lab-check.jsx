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
		"content": `<style>.ecb4j5yed {
  d: path("M15 6V3h2v4.75M8.75 7.5V10l-2.5 4h7l-2.5-4V7.5m4 10.5l2 2L21 15.75");
}

.rgd5j6bkm {
  d: path("M12.36 19.5H3v-10l8-7l8 7v4.34");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rgd5j6bkm"/><path class="ecb4j5yed"/></g>`,
		"fallback": "uix-sharp:lab-check",
	});
}

export default Component;
