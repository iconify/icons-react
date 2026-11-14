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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvg3u9vqj {
  d: path("m11.412 9.533l-.216-1.943a1.5 1.5 0 0 1 .43-1.226l2.407-2.407a1.375 1.375 0 0 1 1.944 0a1.375 1.375 0 0 1 0 1.944l-.088.089a1.5 1.5 0 0 0 0 2.121a1.5 1.5 0 0 0 2.121 0l.089-.088a1.375 1.375 0 0 1 1.944 0a1.375 1.375 0 0 1 0 1.944l-2.407 2.407a1.5 1.5 0 0 1-1.226.43l-1.943-.216a1.5 1.5 0 0 1-.895-.43l-1.73-1.73a1.5 1.5 0 0 1-.43-.895");
}

.w7_06qbsb {
  d: path("m4.399 17.127l6.01-6.011a1.5 1.5 0 0 1 2.121 0l.354.354a1.5 1.5 0 0 1 0 2.121l-6.011 6.01a1.5 1.5 0 0 1-2.121 0l-.353-.353a1.5 1.5 0 0 1 0-2.121");
}
</style><g class="hntgybcog"><path class="w7_06qbsb"/><path class="uvg3u9vqj"/></g>`,
		"fallback": "uix:pin-plumber",
	});
}

export default Component;
