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

.lyfahbc8x {
  width: 12.5px;
  height: 11.5px;
  x: 2.75px;
  y: 6.25px;
  rx: 2.5px;
}

.vzv0yhbsb {
  d: path("M6.75 8.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m4.5 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m-6.5 6.25a2 2 0 0 1 4 0m.5 0a2 2 0 0 1 4 0m2-4.5l4.4-2.45a1 1 0 0 1 1.6.8v6.8a1 1 0 0 1-1.6.8l-4.4-2.45Z");
}
</style><g class="hntgybcog"><rect class="lyfahbc8x"/><path class="vzv0yhbsb"/></g>`,
		"fallback": "iconoven:video-call-group",
	});
}

export default Component;
