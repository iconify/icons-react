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
		"content": `<style>.ggdwykbhe {
  d: path("M9 19S3.5 14 3.5 8.5a5.5 5.5 0 0 1 11 0C14.5 14 9 19 9 19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.os0mfdchv {
  d: path("M7 8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7.75 9.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}

.y8_iddcar {
  d: path("M18 16.75V18l1 1");
}
</style><g class="hntgybcog"><path class="ggdwykbhe"/><path class="os0mfdchv"/><path class="y8_iddcar"/></g>`,
		"fallback": "uix:pin-clock",
	});
}

export default Component;
