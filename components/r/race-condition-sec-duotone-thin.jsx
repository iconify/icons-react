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
		"content": `<style>.b064j7bnn {
  d: path("M12.5 7 15 9.5 12.5 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iwb4l6_yp {
  d: path("m9.5 12 2.5 2.5L9.5 17");
}

.iymet_cml {
  d: path("M15.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8l4 -4h3.5");
}

.rknmpzbdd {
  d: path("M5 14.5h7");
}

.y1z1czbul {
  fill: currentColor;
  d: path("M15.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8l4 -4h3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z0bolwhph {
  d: path("M5 9.5h10");
}
</style><g class="hntgybcog"><path class="y1z1czbul"/><path class="iymet_cml"/><path class="z0bolwhph"/><path class="b064j7bnn"/><path class="rknmpzbdd"/><path class="iwb4l6_yp"/></g>`,
		"fallback": "iconmind:race-condition-sec-duotone-thin",
	});
}

export default Component;
