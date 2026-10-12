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
		"content": `<style>.rs2xsb9og {
  d: path("M4 10.75h16l.804-.002l-.054.802A8.75 8.75 0 0 1 16 18.7v2.55H8V18.7a8.75 8.75 0 0 1-4.75-7.15l-.054-.802zm5.5 0L18.25 3m-5 7.75l7-5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yozkts-vk {
  d: path("m7 14.25l1.25 1.042L9.5 14.25l1.25-1.042L12 14.25l1.25 1.042l1.25-1.042l1.25-1.042L17 14.25");
}
</style><g class="x2cwu0gfd"><path class="rs2xsb9og"/><path class="yozkts-vk"/></g>`,
		"fallback": "iconoven:noodles-sharp",
	});
}

export default Component;
