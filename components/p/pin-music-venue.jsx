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
		"content": `<style>.b5c9_tbha {
  d: path("M12 2.5zA3.5 3.5 0 0 1 15.5 6v4a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 10V6A3.5 3.5 0 0 1 12 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hy_n6wb9f {
  d: path("M5.5 10.5a6.5 6.5 0 0 0 13 0M12 17v4m-3.5 0h7");
}
</style><g class="hntgybcog"><path class="b5c9_tbha"/><path class="hy_n6wb9f"/></g>`,
		"fallback": "uix:pin-music-venue",
	});
}

export default Component;
