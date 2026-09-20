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
		"content": `<style>.coe0-zjah {
  d: path("M15.5 14H19a3 3 0 0 1 3 3 3 3 0 0 1 -3 3h-7a3 3 0 0 1 -3 -3 3 3 0 0 1 3 -3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wddr6xbrp {
  d: path("M8.5 4H12a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3 3 3 0 0 1 3 -3Z");
}
</style><g class="s0phu2bbs"><path class="wddr6xbrp"/><path class="coe0-zjah"/></g>`,
		"fallback": "iconmind:token-outline-bold",
	});
}

export default Component;
