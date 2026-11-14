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
		"content": `<style>.a8hqo6f2d {
  d: path("M6 19.5a6 2 0 1 0 12 0a6 2 0 1 0-12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xq6f1f_jn {
  d: path("M12 2.5v11m-6 6c0-8 12-8 12 0");
}
</style><g class="hntgybcog"><path class="xq6f1f_jn"/><path class="a8hqo6f2d"/></g>`,
		"fallback": "uix:unclog-drain",
	});
}

export default Component;
