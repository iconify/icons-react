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
		"content": `<style>.cm8lo6v1l {
  d: path("m12 2.75l6.6 2.45a1 1 0 0 1 .65.94v5.26c0 4.4-2.9 7.6-7.25 9.85C7.65 19 4.75 15.8 4.75 11.4V6.14a1 1 0 0 1 .65-.94Z");
}

.dxt4vubhn {
  cx: 12px;
  cy: 9.25px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hraju4bxn {
  d: path("M8.75 15.75c.55-1.55 1.75-2.5 3.25-2.5s2.7.95 3.25 2.5");
}
</style><g class="hntgybcog"><path class="cm8lo6v1l"/><circle class="dxt4vubhn"/><path class="hraju4bxn"/></g>`,
		"fallback": "iconoven:shield-user",
	});
}

export default Component;
