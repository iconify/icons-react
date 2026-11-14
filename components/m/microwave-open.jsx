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
		"content": `<style>.ggi_4ibin {
  d: path("M10.125 5.5h8.75A2.625 2.625 0 0 1 21.5 8.125v7.75a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 7.5 15.875v-7.75A2.625 2.625 0 0 1 10.125 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8_t7ub1a {
  d: path("m5.443 6.323l-2 .8A1.5 1.5 0 0 0 2.5 8.516v6.968a1.5 1.5 0 0 0 .943 1.393l2 .8A1.5 1.5 0 0 0 7.5 16.284V7.716a1.5 1.5 0 0 0-2.057-1.393M16.5 5.5v13m2.5-9h.01m-.01 4h.01");
}
</style><g class="hntgybcog"><path class="ggi_4ibin"/><path class="y8_t7ub1a"/></g>`,
		"fallback": "uix:microwave-open",
	});
}

export default Component;
