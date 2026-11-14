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
		"content": `<style>.bj0tceb8a {
  d: path("m2.5 16l3-3.5l5 5m3-1.5l3-3.5l5 5M7.25 8h.01m10.99 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ioxxpnbpf {
  d: path("M5.125 4h2.75A2.625 2.625 0 0 1 10.5 6.625v10.75A2.625 2.625 0 0 1 7.875 20h-2.75A2.625 2.625 0 0 1 2.5 17.375V6.625A2.625 2.625 0 0 1 5.125 4m11 0h2.75A2.625 2.625 0 0 1 21.5 6.625v10.75A2.625 2.625 0 0 1 18.875 20h-2.75a2.625 2.625 0 0 1-2.625-2.625V6.625A2.625 2.625 0 0 1 16.125 4");
}
</style><g class="hntgybcog"><path class="ioxxpnbpf"/><path class="bj0tceb8a"/></g>`,
		"fallback": "uix:photo-compare",
	});
}

export default Component;
