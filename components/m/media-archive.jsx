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
		"content": `<style>.awgrtwbvg {
  d: path("m12.218 12.46l.868.473a1.5 1.5 0 0 1 0 2.634l-.868.473A1.5 1.5 0 0 1 10 14.723v-.946a1.5 1.5 0 0 1 2.218-1.317");
}

.hkh2c4b-n {
  d: path("M4.75 4h14.5A1.75 1.75 0 0 1 21 5.75v1a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 6.75v-1A1.75 1.75 0 0 1 4.75 4M4.5 8.5v10A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5v-10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hkh2c4b-n"/><path class="awgrtwbvg"/></g>`,
		"fallback": "uix:media-archive",
	});
}

export default Component;
