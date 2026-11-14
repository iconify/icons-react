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

.vq_eprbwl {
  d: path("M6.5 21.5V9C6.5 5 9 2.5 12 2.5S17.5 5 17.5 9v12.5");
}

.yqr39icgq {
  d: path("M9 14V8.5c0-1.75 1.25-3 3-3s3 1.25 3 3V14c0 .75-.5 1.25-1.25 1.25h-3.5C9.5 15.25 9 14.75 9 14Zm.5 4.75h5");
}
</style><g class="ulnmmdpxh"><path class="vq_eprbwl"/><path class="yqr39icgq"/></g>`,
		"fallback": "uix-sharp:nail",
	});
}

export default Component;
