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
		"content": `<style>.feh94fb1h {
  d: path("M8.5 8.5c0 2.5 7-2 7 .5m0 6c0 2.5-7-2-7 .5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q7ce0obic {
  d: path("M6 5.5a2.5 3 0 1 0 5 0a2.5 3 0 1 0-5 0m7 6.5a2.5 3 0 1 0 5 0a2.5 3 0 1 0-5 0m-7 6.5a2.5 3 0 1 0 5 0a2.5 3 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="q7ce0obic"/><path class="feh94fb1h"/></g>`,
		"fallback": "uix:lymphatic-system",
	});
}

export default Component;
