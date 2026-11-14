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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tarnf7xvc {
  d: path("m4.99 12.061l7.071-7.071a3.5 3.5 0 0 1 4.949 0a3.5 3.5 0 0 1 0 4.949L9.939 17.01a3.5 3.5 0 0 1-4.949 0a3.5 3.5 0 0 1 0-4.949m3.535-3.536l4.95 4.95M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="tarnf7xvc"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:medication-schedule",
	});
}

export default Component;
