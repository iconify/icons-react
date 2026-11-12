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

.l678ypbwk {
  d: path("M4.5 10.5L3 12L9 18M7.5 7.5L9 6");
}

.mwz2inb5v {
  d: path("M19.5 10.5L21 12L15 18M16.5 7.5L15 6");
}

.x1f4lc3zb {
  d: path("M12 2L12 22");
}
</style><g class="hntgybcog"><path class="l678ypbwk"/><path class="mwz2inb5v"/><path class="x1f4lc3zb"/></g>`,
		"fallback": "solar:separator-vertical-broken",
	});
}

export default Component;
