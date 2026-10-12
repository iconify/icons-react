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
		"content": `<style>.cm25e9ila {
  cx: 12px;
  cy: 14.5px;
  r: 6.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbhjn-k2g {
  d: path("M5.5 13.25c2-1 4 .5 6.5-.25s4-1.25 6.5-.25m-11 4.75c2 .75 4 .5 5.5-.25m-1-9.5v-2.5m0 0c0-1.75 1.75-2.5 4.25-2.5C16.25 5 14.5 6.5 12 5.25m0 0C12 4 10.75 3.5 9 3.5C9 5 10.25 6 12 5.25");
}
</style><g class="hntgybcog"><circle class="cm25e9ila"/><path class="vbhjn-k2g"/></g>`,
		"fallback": "iconoven:terraforming",
	});
}

export default Component;
