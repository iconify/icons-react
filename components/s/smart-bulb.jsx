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
		"content": `<style>.f6mpo5bjc {
  d: path("M9.5 16.5V15c-2-1.2-3-3-3-5a5.5 5.5 0 0 1 11 0c0 2-1 3.8-3 5v1.5Zm.5 3h4M12 12h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x8aq-ybeb {
  d: path("M9.879 9.879a3 3 0 0 1 4.242 0");
}
</style><g class="hntgybcog"><path class="f6mpo5bjc"/><path class="x8aq-ybeb"/></g>`,
		"fallback": "uix:smart-bulb",
	});
}

export default Component;
