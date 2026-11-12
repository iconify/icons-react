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
		"content": `<style>.can82cc3k {
  d: path("M14.5 20L20 14H10M4 14L6.5 14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7u_jr25u {
  d: path("M9.5 4L4 10L14 10M20 10L17.5 10");
}
</style><g class="hntgybcog"><path class="x7u_jr25u"/><path class="can82cc3k"/></g>`,
		"fallback": "solar:transfer-horizontal-broken",
	});
}

export default Component;
