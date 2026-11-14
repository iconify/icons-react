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
		"content": `<style>.a7ta_m8dq {
  d: path("M7.75 6h8.5a5.25 5.25 0 0 1 5.25 5.25v1.5A5.25 5.25 0 0 1 16.25 18h-8.5a5.25 5.25 0 0 1-5.25-5.25v-1.5A5.25 5.25 0 0 1 7.75 6M6 12h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8qisdb-u {
  d: path("M12.25 11.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M16.5 13l1.5 1.5");
}
</style><g class="hntgybcog"><path class="a7ta_m8dq"/><path class="y8qisdb-u"/></g>`,
		"fallback": "uix:keyword-research",
	});
}

export default Component;
