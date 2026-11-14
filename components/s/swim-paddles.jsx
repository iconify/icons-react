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

.q24-p2btr {
  d: path("M6.75 15.25a2.25 2.25 0 0 1 0 4.5m10.5-4.5a2.25 2.25 0 0 1 0 4.5");
}

.tefxfobhn {
  d: path("M5.921 3.5h1.658a2.625 2.625 0 0 1 2.61 2.905l-.949 8.858A2.504 2.504 0 0 1 6.75 17.5a2.504 2.504 0 0 1-2.49-2.237l-.949-8.858A2.625 2.625 0 0 1 5.921 3.5m10.5 0h1.658a2.625 2.625 0 0 1 2.61 2.905l-.949 8.858a2.504 2.504 0 0 1-2.49 2.237a2.504 2.504 0 0 1-2.49-2.237l-.949-8.858a2.625 2.625 0 0 1 2.61-2.905");
}
</style><g class="hntgybcog"><path class="tefxfobhn"/><path class="q24-p2btr"/></g>`,
		"fallback": "uix:swim-paddles",
	});
}

export default Component;
