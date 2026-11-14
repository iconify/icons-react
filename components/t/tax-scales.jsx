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

.i7j1tbbal {
  d: path("M12 3v17.5m-4.5 0h9M5.5 13V6.5h13V9M2 13h7a3.5 3.5 0 0 1-7 0m13 0h7a3.5 3.5 0 0 1-7 0");
}

.py9w04x0r {
  d: path("M16.5 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="i7j1tbbal"/><path class="py9w04x0r"/></g>`,
		"fallback": "uix:tax-scales",
	});
}

export default Component;
