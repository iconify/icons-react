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
		"content": `<style>.bv1y61bvs {
  d: path("M4 16a8 8 0 0 1 16 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ils7yp4cg {
  d: path("M2 16h20");
}

.qw7b_6b1t {
  d: path("M8 20h8");
}

.us2evabuy {
  d: path("M12 5.5V8");
}
</style><g class="hntgybcog"><path class="ils7yp4cg"/><path class="bv1y61bvs"/><path class="us2evabuy"/><path class="qw7b_6b1t"/></g>`,
		"fallback": "iconmind:room-service-outline-thin",
	});
}

export default Component;
