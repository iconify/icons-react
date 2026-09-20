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
		"content": `<style>.d4colq8ps {
  d: path("m8 9 4 4 -4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l6csbcieq {
  d: path("m16 9 -4 4 4 4");
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="hntgybcog"><path class="rw6ho_bav"/><path class="z9ittvbis"/><path class="d4colq8ps"/><path class="l6csbcieq"/></g>`,
		"fallback": "iconmind:transfer-station-outline-thin",
	});
}

export default Component;
