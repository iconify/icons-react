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
		"content": `<style>.cle27-bsq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m16.5 10.875l3.947 1.974a1 1 0 0 1 .553.894v4.389a1 1 0 0 1-.553.894l-3.5 1.75a1 1 0 0 1-.894 0L12 18.75l-4.053 2.026a1 1 0 0 1-.894 0l-3.5-1.75A1 1 0 0 1 3 18.132v-4.389a1 1 0 0 1 .553-.894L7.5 10.875V5.868a1 1 0 0 1 .553-.894l3.5-1.75a1 1 0 0 1 .894 0l3.5 1.75a1 1 0 0 1 .553.894zM7.658 5.329L12 7.5l4.342-2.171M12 7.5v5.625m-4.5-2.25l4.5 2.25l4.5-2.25M3.158 13.204L7.5 15.375l4.5-2.25l4.5 2.25l4.342-2.171M7.5 15.375v5.507m4.5-7.757v5.625m4.5-3.375v5.507");
}

.ft5dv1b6b {
  fill: none;
}

.g7d61rbvr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m17.5 10.257l3.394 1.697A2 2 0 0 1 22 13.743v4.389a2 2 0 0 1-1.106 1.789l-3.5 1.75a2 2 0 0 1-1.788 0L12 19.868l-3.606 1.803a2 2 0 0 1-1.788 0l-3.5-1.75A2 2 0 0 1 2 18.132v-4.389a2 2 0 0 1 1.106-1.789L6.5 10.257V5.868a2 2 0 0 1 1.106-1.789l3.5-1.75a2 2 0 0 1 1.788 0l3.5 1.75A2 2 0 0 1 17.5 5.868Z");
}
</style><g class="ft5dv1b6b"><path class="g7d61rbvr"/><path class="cle27-bsq"/></g>`,
		"fallback": "coolicons:packages-duotone",
	});
}

export default Component;
