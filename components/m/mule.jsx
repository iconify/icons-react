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
		"content": `<style>.d3wzzac2p {
  d: path("M6.5 10.5v-3h5v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n-rsvbl6d {
  d: path("M4.5 10.5H14L16.5 6l-.75-3.5l1.75 2.75l1.25-2.75v3.25l2.75 3.5l-.75 1.5l-2.5-.75l-1.75 4q-.5 1-2 1H6c-1.5 0-2.5-1-2.5-2.5v-1c0-.5.5-1 1-1m1 4.5v6.5m3-6.5v6.5m3.75-6.5v6.5m3-6.5v6.5M3.75 11.25l-1 3.75");
}
</style><g class="hntgybcog"><path class="n-rsvbl6d"/><path class="d3wzzac2p"/></g>`,
		"fallback": "uix:mule",
	});
}

export default Component;
