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
		"content": `<style>.ab_9bjyzr {
  d: path("M12.2 18H2.5V3h19v11");
}

.k4bsyef7v {
  d: path("m6.5 7.5l3 2.5l-3 2.5m5 0H15m0 5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ab_9bjyzr"/><path class="k4bsyef7v"/></g>`,
		"fallback": "uix-sharp:ssh-tunnel",
	});
}

export default Component;
