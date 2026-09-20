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
		"content": `<style>.oa7ibkb8p {
  d: path("M14.32 10a5.5 5.5 0 1 1 -4.64 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wxfc8bn6j {
  d: path("M5 6h3l2 -2 4 4 2 -2h3");
}
</style><g class="s0phu2bbs"><path class="wxfc8bn6j"/><path class="oa7ibkb8p"/></g>`,
		"fallback": "iconmind:liveness-outline-bold",
	});
}

export default Component;
