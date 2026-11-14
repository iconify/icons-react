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

.j7qjn6psg {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0");
}

.sdscs6g2c {
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4-9v5m0 8v5m-9-9h5m8 0h5");
}
</style><g class="hntgybcog"><path class="j7qjn6psg"/><path class="sdscs6g2c"/></g>`,
		"fallback": "uix:pin-lifeguard",
	});
}

export default Component;
