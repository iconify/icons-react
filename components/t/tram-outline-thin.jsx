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
		"content": `<style>.e4mo_8b_s {
  d: path("M3 22h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s3lwy2n0b {
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.wu99rzr0v {
  d: path("M12 5V2h7");
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="hntgybcog"><path class="s3lwy2n0b"/><path class="x50q_4bdr"/><path class="wu99rzr0v"/><path class="e4mo_8b_s"/></g>`,
		"fallback": "iconmind:tram-outline-thin",
	});
}

export default Component;
