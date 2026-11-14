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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yde3gobvh {
  d: path("M4.5 14v-2a7.5 7.5 0 0 1 15 0v2");
}

.z_vp4m7rv {
  d: path("M5 13za2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2m14 0za2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2m0 6c0 2-2 2.5-5 2.5");
}
</style><g class="hntgybcog"><path class="yde3gobvh"/><path class="z_vp4m7rv"/></g>`,
		"fallback": "uix:service-call-centre",
	});
}

export default Component;
